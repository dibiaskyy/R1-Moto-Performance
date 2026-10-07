<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('contact_inquiries', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email');
            $table->string('phone')->nullable();
            $table->enum('subject_type', ['general', 'dealership_inquiry', 'technical_support', 'warranty', 'other'])->default('general');
            $table->text('message');
            $table->enum('status', ['unread', 'read', 'responded', 'archived'])->default('unread');
            $table->text('admin_reply_notes')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('contact_inquiries');
    }
};
