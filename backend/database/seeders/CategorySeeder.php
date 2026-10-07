<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            [
                'name' => 'CVT Transmission',
                'slug' => 'cvt-transmission',
                'description' => 'Precision engineered pulleys, clutch bells, torque drives, and heavy-duty lining assemblies for optimal power transfer.',
                'icon' => 'Cog',
                'is_active' => true,
            ],
            [
                'name' => 'CVT Tuning & Calibration',
                'slug' => 'cvt-tuning-calibration',
                'description' => 'Calibrated flyball roller weights, high-tensile center torque springs, clutch springs, and durable slider pieces.',
                'icon' => 'Gauge',
                'is_active' => true,
            ],
            [
                'name' => 'Braking Systems',
                'slug' => 'braking-systems',
                'description' => 'High-thermal tolerance ceramic compound brake pads for fade-free stopping performance.',
                'icon' => 'Disc',
                'is_active' => true,
            ],
            [
                'name' => 'Fluids & Lubricants',
                'slug' => 'fluids-lubricants',
                'description' => 'Anti-foaming suspension fork oils and specialized performance lubricants.',
                'icon' => 'Droplets',
                'is_active' => true,
            ],
            [
                'name' => 'Maintenance & Care',
                'slug' => 'maintenance-care',
                'description' => 'Professional-grade aerosol CVT cleaners and degreasers for scooter transmission care.',
                'icon' => 'Wrench',
                'is_active' => true,
            ],
        ];

        foreach ($categories as $category) {
            Category::updateOrCreate(['slug' => $category['slug']], $category);
        }
    }
}
