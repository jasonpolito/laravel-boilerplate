<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
})->name('home');

Route::group(['prefix' => '/login'], function(){
	Route::get('/', 'Auth\LoginController@index')->name('login.index');
	Route::get('/google', 'Auth\LoginController@google')->name('login.google');
	Route::get('/google/callback', 'Auth\LoginController@googleCallback');
});
