<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use App\Instrumental;

class Instrumental extends Authenticatable 
{
    use Notifiable;

    protected $table = 'instrumental';

    protected $fillable = ['name', 'description'];

    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);
    }
}
