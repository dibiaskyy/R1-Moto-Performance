<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database for R1 Moto Performance.
     */
    public function run(): void
    {
        $this->call([
            CategorySeeder::class,
            MotorcycleModelSeeder::class,
            UserSeeder::class,
            ProductSeeder::class,
            CompatibilitySeeder::class,
        ]);
    }
}
