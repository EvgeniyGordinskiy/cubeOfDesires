<?php

namespace App\Services; 

use App\Contracts\YesNoServiceAbstract;

class YesNoWtfService extends YesNoServiceAbstract
{
    /**
     *  Send request
     */
    public function getAnswer()
    {
        $result = \GuzzleHttp\json_decode($this->http_client->get('/api')->getBody());
        if (isset($result->answer)) {
           return  $result->answer;
        }
        return '';
    }
}