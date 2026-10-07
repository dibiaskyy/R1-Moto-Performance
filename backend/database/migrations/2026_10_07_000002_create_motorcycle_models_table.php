<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('motorcycle_models', function (Blueprint $table) {
            $table->id();
            $table->string('brand'); // e.g. Yamaha, Honda, Suzuki
            $table->string('model_name'); // e.g. Aerox 155, NMAX 155, Click 125, Click 150
            $table->string('slug')->unique();
            $table->string('engine_displacement')->nullable(); // e.g. 155cc, 125cc
            $table->string('year_range')->nullable(); // e.g. 2018-2024, V1 / V2
            $table->string('image_path')->nullable();
            $table->boolean('is_popular')->default(false);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('motorcycle_models');
    }
};
