<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;

Route::controller(HomeController::class)->group(function () {
    Route::get('/', 'home')->name('home');
});

Route::controller(AuthController::class)->group(function () {
    Route::get('/login', 'redirectToDiscord')->name('login');
    Route::get('/logout', 'logout')->name('logout');

    Route::get('/login/callback', 'handleDiscordCallback');
});
