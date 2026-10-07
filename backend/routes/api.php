<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Category;
use App\Models\Product;
use App\Models\MotorcycleModel;

/*
|--------------------------------------------------------------------------
| API Routes - R1 Moto Performance
|--------------------------------------------------------------------------
*/

Route::prefix('v1')->group(function () {
    
    // Health & System Status
    Route::get('/health', function () {
        return response()->json([
            'status' => 'healthy',
            'system' => 'R1 Moto Performance API Engine',
            'version' => '1.0.0',
            'timestamp' => now()->toIso8601String(),
        ]);
    });

    // Public Categories Endpoint
    Route::get('/categories', function () {
        return response()->json([
            'data' => Category::where('is_active', true)->withCount('products')->get()
        ]);
    });

    // Public Motorcycle Models Endpoint
    Route::get('/motorcycle-models', function () {
        return response()->json([
            'data' => MotorcycleModel::orderBy('brand')->orderBy('model_name')->get()
        ]);
    });

    // Public Products Catalog Endpoint
    Route::get('/products', function (Request $request) {
        $query = Product::with(['category', 'compatibleMotorcycles'])->active();

        if ($request->has('category')) {
            $query->whereHas('category', function ($q) use ($request) {
                $q->where('slug', $request->query('category'));
            });
        }

        if ($request->has('motorcycle_model_id')) {
            $query->whereHas('compatibleMotorcycles', function ($q) use ($request) {
                $q->where('motorcycle_models.id', $request->query('motorcycle_model_id'));
            });
        }

        if ($request->has('search')) {
            $search = $request->query('search');
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('sku', 'like', "%{$search}%")
                  ->orWhere('summary', 'like', "%{$search}%");
            });
        }

        return response()->json([
            'data' => $query->latest()->get()
        ]);
    });

    // Single Product with Two-Way Compatibility Details
    Route::get('/products/{slug}', function ($slug) {
        $product = Product::where('slug', $slug)
                          ->with(['category', 'compatibleMotorcycles'])
                          ->firstOrFail();

        return response()->json(['data' => $product]);
    });

    // Motorcycle to Compatible Parts (Mode A)
    Route::get('/motorcycle-models/{id}/products', function ($id) {
        $model = MotorcycleModel::with('compatibleProducts.category')->findOrFail($id);

        return response()->json([
            'motorcycle' => $model,
            'compatible_products' => $model->compatibleProducts
        ]);
    });
});
