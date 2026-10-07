<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('careers', function (Blueprint $table) {
            $table->id();
            $table->string('title'); // e.g. Motorcycle Diagnostic Specialist / Mechanic, Sales Scout, Media Specialist
            $table->string('slug')->unique();
            $table->string('department');
            $table->string('employment_type')->default('Full-Time'); // Full-Time, Part-Time, Internship
            $table->string('location')->default('Quezon City, Philippines');
            $table->text('summary');
            $table->longText('description');
            $table->json('requirements')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        Schema::create('career_applications', function (Blueprint $table) {
            $table->id();
            $table->foreignId('career_id')->constrained('careers')->onDelete('cascade');
            $table->string('applicant_name');
            $table->string('email');
            $table->string('phone');
            $table->string('resume_path');
            $table->text('cover_letter')->nullable();
            $table->enum('status', ['received', 'reviewed', 'interviewed', 'offered', 'rejected'])->default('received');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('career_applications');
        Schema::dropIfExists('careers');
    }
};
