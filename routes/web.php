<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductDetailController;
use App\Http\Controllers\Seller\ProductController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

// Route::get('/', function () {
//     return Inertia::render('Home', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//     ]);
// })->name('home');

Route::get('/', HomeController::class)->name('home');


Route::prefix('/seller')->group(function () {
    Route::resource('products', ProductController::class)->middleware('auth');
});

Route::get('/cart', [CartController::class, 'index'])->name('cart.index');
Route::post('/cart/{product_id}', [CartController::class, 'store'])->middleware('auth')->name('cart.store');


require __DIR__.'/auth.php';

Route::get('/{product}', ProductDetailController::class)->name('product-detail');