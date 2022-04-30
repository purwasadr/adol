<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductDetailController extends Controller
{
    public function __invoke(Product $product)
    {
        return Inertia::render('ProductDetail', ['product' => $product]);
    }
}
