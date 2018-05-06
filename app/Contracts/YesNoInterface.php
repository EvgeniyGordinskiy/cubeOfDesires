<?php
namespace App\Contracts;


use App\YesNoService;

interface YesNoInterface
{
    /**
     * Send request
     * @return mixed
     */
    public function getAnswer();
    
    public function __construct(YesNoService $service);
}