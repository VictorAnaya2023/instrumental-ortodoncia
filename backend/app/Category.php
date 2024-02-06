<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use App\Category;

class Category extends Authenticatable 
{
    use Notifiable;
    protected $table = 'category';

    protected $fillable = ['name', 'description','image'];

    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);
    }
}
