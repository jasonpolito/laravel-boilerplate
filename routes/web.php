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
		SEO::setTitle('Home');
    SEO::setDescription('This is my page description');
    SEO::opengraph()->setUrl('http://current.url.com');
    SEO::setCanonical('https://codecasts.com.br/lesson');
    SEO::opengraph()->addProperty('type', 'articles');
    SEO::twitter()->setSite('@LuizVinicius73');
    \JavaScript::put([
        'TESTERS' => 'bar',
    ]);
    return view('welcome');
})->name('home');
