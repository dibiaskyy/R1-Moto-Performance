<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        // 1. Super Admin Account
        User::updateOrCreate(
            ['email' => 'admin@r1moto.com'],
            [
                'name' => 'R1 Master Administrator',
                'password' => Hash::make('password'),
                'role' => 'admin',
                'phone' => '+63 917 123 4567',
                'email_verified_at' => now(),
            ]
        );

        // 2. Verified Dealer Account
        User::updateOrCreate(
            ['email' => 'dealer@r1moto.com'],
            [
                'name' => 'SpeedZone Moto Parts (Authorized Dealer)',
                'password' => Hash::make('password'),
                'role' => 'dealer',
                'phone' => '+63 928 987 6543',
                'email_verified_at' => now(),
            ]
        );

        // 3. Regular Customer / Rider Account
        User::updateOrCreate(
            ['email' => 'rider@r1moto.com'],
            [
                'name' => 'Juan Dela Cruz (Aerox 155 Rider)',
                'password' => Hash::make('password'),
                'role' => 'customer',
                'phone' => '+63 905 555 1234',
                'motorcycle_model_id' => 1, // Will link to Aerox 155
                'email_verified_at' => now(),
            ]
        );
    }
}
