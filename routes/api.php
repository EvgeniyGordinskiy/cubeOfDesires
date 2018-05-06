<?php

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

Route::group([
    'prefix' => 'auth'
], function(){
    Route::post('', ['as' => '', 'uses' => 'AuthController@authenticate']);
    Route::post('register', ['as' => 'register', 'uses' => 'AuthController@register']);
    Route::post('reset_password', ['as' => 'resetPassword', 'uses' => 'AuthController@resetPassword']);
    Route::get('change_password/{token}', ['as' => 'changePassword', 'uses' => 'AuthController@changePassword']);
});

// Account Route
Route::group([
    'as' => 'account.',
    'prefix' => 'account',
    'middleware' => [
        'jwt.auth'
    ],
], function () {
    Route::get('', ['as' => 'show', 'uses' => 'Account\AccountController@show']);
});

// Desire Route
Route::group([
    'as' => 'desire.',
    'prefix' => 'desire',
    'middleware' => [
        'jwt.auth'
    ],
], function () {
    Route::post('', ['as' => 'show', 'uses' => 'UsersDesireController@create']);
    Route::get('', ['as' => 'show', 'uses' => 'UsersDesireController@getAnswer']);
});
