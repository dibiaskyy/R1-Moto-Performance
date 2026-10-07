<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Two-Way Motorcycle Compatibility Engine Pivot Table
     */
    public function up(): void
    {
        Schema::create('motorcycle_model_product', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id')->constrained('products')->onDelete('cascade');
            $table->foreignId('motorcycle_model_id')->constrained('motorcycle_models')->onDelete('cascade');
            $table->string('fitment_notes')->nullable(); // e.g. "Compatible with V1 & V2", "Recommended with 14g roller"
            $table->timestamps();

            $table->unique(['product_id', 'motorcycle_model_id'], 'prod_model_unique');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('motorcycle_model_product');
    }
};
