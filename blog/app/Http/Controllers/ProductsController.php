<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
// State the Model for the controller
use App\Product;

class ProductsController extends Controller
{
    // index
    public function index() {
        return Product::all();
    }
    
    // show
    public function show(Product $product) {
        return $product
    }

    // store / creation
    public function store(Request $request) {
        $product = Product::create($request->all());
        return response()->json($product, 201);
    }

    // update
    public function update(Request $request, Product $product) {
        $product->update($request->all());
        return response()->json($product, 200);
    }

    // delete
    public function delete(Product $product){
        $product->delete();
        return response()->json(null, 204);
    }
}