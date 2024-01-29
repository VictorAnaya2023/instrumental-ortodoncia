<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('users'       ,'Api\UserController@index');
Route::get('user/{id}'   ,'Api\UserController@index');
Route::delete('user/{id}','Api\UserController@destroy');
Route::put('user/{id}'   ,'Api\UserController@update');
Route::post('user/{id}'  ,'Api\UserController@crate');


Route::get('instruments','Api\InstrumentalController@index');

// Route::post('auth/register', [RegisterController::class, 'register']);
// Route::post('auth/login', [GetAccessTokenController::class, 'login']);
