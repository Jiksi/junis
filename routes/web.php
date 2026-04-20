<?php

use App\Http\Controllers\WishController;
use App\Models\Wish;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('home', [
        'wishes' => Inertia::scroll(fn () => Wish::latest()->paginate()),
    ]);
})->name('home');

Route::post('/wishes', [WishController::class, 'store'])->name('wishes.store');
Route::delete('/wishes/{wish}', [WishController::class, 'destroy'])->name('wishes.destroy');

Route::inertia('invite', 'invite')->name('invite');
Route::inertia('wa', 'wa')->name('wa');
