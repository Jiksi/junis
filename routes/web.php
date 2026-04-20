<?php

use App\Http\Controllers\WishController;
use App\Models\Wish;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('home', [
        'wishes' => Wish::latest()->get(),
    ]);
})->name('home');

Route::post('/wishes', [WishController::class, 'store'])->name('wishes.store');

Route::inertia('invite', 'invite')->name('invite');
Route::inertia('wa', 'wa')->name('wa');
