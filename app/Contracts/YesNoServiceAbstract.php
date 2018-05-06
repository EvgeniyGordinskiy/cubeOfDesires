<?php
namespace App\Contracts;


use App\YesNoService as Model;
use GuzzleHttp\Client;

class YesNoServiceAbstract implements YesNoInterface
{
    protected $model;
    protected $http_client;
    
    /**
     * Send request
     * @return mixed
     */
    public function getAnswer()  : string
    {
        return '';
    }

    public function __construct(Model $model)
    {
        $this->model = $model;
        $this->http_client = new Client([
            'base_uri' => $this->model->url,
            'verify' => false
        ]);
    }
}