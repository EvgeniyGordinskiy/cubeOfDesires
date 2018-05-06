<?php

namespace App\Traits;


use App\Contracts\YesNoInterface;

trait YesNoTrait
{
    public function getYesNoService()
    {
        $user = request()->user();
        return \App::make(YesNoInterface::class, ['user' => $user]);
    }
}