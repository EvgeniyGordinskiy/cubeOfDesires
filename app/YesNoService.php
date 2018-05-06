<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class YesNoService extends Model
{
    static protected $tableS = 'yesNoServices';
    protected $table = 'yesNoServices';
    
    public static function getTableS()
    {
        return self::$tableS;
    }
}
