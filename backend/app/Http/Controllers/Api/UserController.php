<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{
    public function index()
    {
        return User::all();
    }

    public function create()
    {
        return User::all();
    }

    public function update()
    {
        return User::all();
    }

    public function destroy()
    {
        return User::all();
    }
}
