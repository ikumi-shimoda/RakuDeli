<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\BookController;

Route::post('/users', [UserController::class, 'index']);
Route::post('/book/store', [BookController::class, 'store']);
