<?php

use Illuminate\Http\Request;

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

Route::resource('usuarios', 'UsersController');

/*Route::prefix('v1')->group(function(){
    Route::resource('usuarios', 'UsersController');
});

Route::get('usuarios', 'UsersController@index');
Route::get('usuarios/{id}', 'UsersController@show');
Route::post('usuarios', 'UsersController@store');
Route::put('usuarios/{id}', 'UsersController@update');
Route::delete('usuarios/{id}', 'UsersController@destroy');*/
