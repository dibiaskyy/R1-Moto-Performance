<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->foreignId('category_id')->constrained('categories')->onDelete('cascade');
            $table->string('name');
            $table->string('sku')->unique();
            $table->string('slug')->unique();
            $table->text('summary')->nullable();
            $table->longText('description')->nullable();
            $table->json('key_features')->nullable(); // JSON array of highlighted bullets (e.g. CNC machined, Air fins)
            $table->json('specs')->nullable(); // Technical specs key-value JSON
            $table->decimal('suggested_retail_price', 10, 2)->default(0.00);
            $table->decimal('dealer_wholesale_price', 10, 2)->default(0.00);
            $table->string('primary_image')->nullable();
            $table->json('gallery_images')->nullable();
            $table->integer('stock_quantity')->default(0);
            $table->string('stock_status')->default('in_stock'); // in_stock, low_stock, out_of_stock
            $table->boolean('is_featured')->default(false);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
