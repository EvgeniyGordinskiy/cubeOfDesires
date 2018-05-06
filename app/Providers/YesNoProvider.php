<?php

namespace App\Providers;

use App\YesNoService;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Config;

class YesNoProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        Config::set([
            'yesNoServices' => $this->getServices()
        ]);
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->call([$this, 'registerService']);
    }

    /**
     * Construct service depends by pass param
     * https://laracasts.com/discuss/channels/general-discussion/multiple-services-implementing-same-interface-switching-at-runtime
     *
     */
    public function registerService()
    {
        $this->app->bind(
            'App\Contracts\YesNoInterface',
            function ($app, $parameters) {
                
                // if model injection
                if (key_exists('user', $parameters)) {
                    $user = $parameters['user'];
                    $service = basename(class_basename($user->yesNoService->name),'.php');
                } else {
                    $user = $app->auth->user();
                    if (!$user) {
                        throw new AuthenticationException();
                    }

                    if (key_exists('yesNO_service', $parameters)) {
                        // for controller injection with selected yesNO service
                        $service = studly_case($parameters['yesNO_service']);
                    } else {
                        // for injection use user yesNO_service
                        $service =  basename(class_basename($user->yesNoService->name),'.php');
                    }

                    // depend default yesNO service
                    if (!in_array($service, $this->getServices())) {
                        //return null;
                        $service = YesNoService::first();
                        if (!$service) throw new \Exception('Must be at least one YesNoService enabled.');
                    }
                }
                $class_name = "App\Services\\{$service}";
                return new $class_name($user->yesNoService);
            }
        );
    }

    /**
     * Return list available 2fa services
     *
     * @return array
     */
    public function getServices()
    {
        if(Schema::hasTable(YesNoService::getTableS())) {
            return YesNoService::all()->pluck('name');
        }
        return [];
    }
}
