<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Order;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Seller/Orders', [
            // 'orders' => Order::select('products.*')->from('products')->where('products.user_id', auth()->user()->id)->get()
            'orders' => Order::where(function ($query) {
                $query->select('user_id')
                    ->from('products')
                    ->whereColumn('products.id', 'orders.product_id')
                    ->limit(1);
            }, auth()->user()->id)->with(['product'])->get(),
            'page' => 'orders.index'
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $input_products = collect($request->input('products'));
        // dd($input_products[0]['count']);
        // dd(Cart::all());
        // dd($input_products);

        $input_products->each(function ($item, $key) {
            $cart = Cart::find($item['id']);
            Order::create([
                'user_id' => auth()->user()->id,
                'product_id' => $cart->product->id,
                'count' => $item['count'],
                'status' => 'order'
            ]);
        });

        $input_products->each(function ($item, $key) {
            Cart::destroy($item['id']);
        });
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
