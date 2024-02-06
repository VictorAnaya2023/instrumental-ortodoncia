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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('login',    'API\RegisterController@login');
Route::post('register', 'API\RegisterController@register');
   
Route::middleware('auth:api')->group( function () {
    
    Route::get('categories'       ,'Api\CategoryController@index');
    Route::get('category/{id}'   ,'Api\CategoryController@readbyid');
    Route::post('category'       ,'Api\CategoryController@create');   
    Route::delete('category/{id}','Api\CategoryController@destroy');
    Route::put('category/{id}'   ,'Api\CategoryController@update');

    Route::get('users'       ,'Api\UserController@index');
    Route::get('user/{id}'   ,'Api\UserController@readbyid');
    Route::delete('user/{id}','Api\UserController@destroy');
    Route::put('user/{id}'   ,'Api\UserController@update');
    Route::post('user'       ,'Api\UserController@create');   
    
    Route::get('instruments','Api\InstrumentalController@index');

});
