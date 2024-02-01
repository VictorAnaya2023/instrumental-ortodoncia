<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use App\User;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use Notifiable , HasApiTokens;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'username', 'email', 'password','last_name','first_name'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token', 'api_token'
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'email_verified_at' => 'datetime',
    ];

        // prevent avatar from being set along with other user details
    protected $guarded = ['id', 'avatar'];
 
    protected $gravatarSize;

    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);
    }

}

class Instrumental extends Authenticatable 
{
    use Notifiable;

    protected $fillable = ['name', 'description'];

    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);
    }
}
