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

Route::post('registration', 'Api\AuthController@registration');
Route::post('login', 'Api\AuthController@login');
Route::get('refresh', 'Api\AuthController@refresh');
Route::get('blog', 'BlogController@index');
Route::get('blog/:id', 'BlogController@show');
Route::group(['middleware' => ['jwt.auth']], function() {
    Route::post('logout', 'Api\AuthController@logout');
    Route::get('me', 'Api\AuthController@me');
    Route::post('blog', 'BlogController@store');
});