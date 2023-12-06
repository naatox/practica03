<?php

use Illuminate\Http\Request;
use App\Http\Models\User;
use App\Http\Models\Technologies;
use App\Http\Models\Interests;
use App\Http\Models\Networks;
use App\Http\Controllers\UserController;
use App\Http\Controllers\InterestsController;
use App\Http\Controllers\NetworksController;
use App\Http\Controllers\TechnologiesController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/



Route::get('profile', [UserController::class, 'getUser']);
Route::put('profile', [UserController::class, 'update']);

Route::put('editInterest', [InterestsController::class, 'editInterest']);

Route::put('editNetwork', [NetworksController::class, 'editNetwork']);

Route::put('editTechnology', [TechnologiesController::class, 'editTechnology']);
