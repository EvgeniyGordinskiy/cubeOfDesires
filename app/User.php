<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable  implements JWTSubject
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();  // Eloquent model method
    }

    /**
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [
            'user' => [
                'id' => $this->id,
            ]
        ];
    }

    public function save(array $options = [])
    {
        // If it's a new user
        if(!$this->exists) {
            $this->yesNoService_id = $this->getYesNoServiceForUser();
        }
        return parent::save($options);
    }

    public function yesNoService()
    {
        return $this->belongsTo(YesNoService::class, 'yesNoService_id');
    }
    
    protected function getYesNoServiceForUser()
    {
      return YesNoService::first()->id;
    }
}
