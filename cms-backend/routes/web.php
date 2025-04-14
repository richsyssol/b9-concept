<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HeroContentController;

Route::get('/', [HeroContentController::class, 'index']);
Route::get('/', function () {
    return view('welcome');
});
