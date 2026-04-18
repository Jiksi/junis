<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'home')->name('home');
Route::inertia('invite', 'invite')->name('invite');
Route::inertia('wa', 'wa')->name('wa');