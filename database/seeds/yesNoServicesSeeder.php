<?php

use App\YesNoService;
use Illuminate\Database\Seeder;

class yesNoServicesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $yesNoService = new YesNoService();
        $name = 'YesNoWtfService';
        if(!YesNoService::whereName($name)->first()) {
            $yesNoService->name = $name;
            $yesNoService->url = 'https://yesno.wtf/api';
            $yesNoService->save();
        }
    }
}
