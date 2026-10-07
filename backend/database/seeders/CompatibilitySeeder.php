<?php

namespace Database\Seeders;

use App\Models\MotorcycleModel;
use App\Models\Product;
use Illuminate\Database\Seeder;

class CompatibilitySeeder extends Seeder
{
    public function run(): void
    {
        $aerox = MotorcycleModel::where('slug', 'yamaha-aerox-155')->first();
        $nmax = MotorcycleModel::where('slug', 'yamaha-nmax-155')->first();
        $click125 = MotorcycleModel::where('slug', 'honda-click-125i')->first();
        $click150 = MotorcycleModel::where('slug', 'honda-click-150i-160')->first();
        $pcx = MotorcycleModel::where('slug', 'honda-pcx-160')->first();
        $adv = MotorcycleModel::where('slug', 'honda-adv-160')->first();
        $mioSporty = MotorcycleModel::where('slug', 'yamaha-mio-sporty')->first();
        $mioI125 = MotorcycleModel::where('slug', 'yamaha-mio-i-125')->first();

        // Compatibility mappings
        $mappings = [
            'R1-PS-001' => [
                [$aerox, 'Direct Fitment (V1 & V2) - 13.8 Degree Ramp'],
                [$nmax, 'Direct Fitment (V1 & V2) - Ideal for 155cc Touring'],
                [$click125, 'Direct Fitment with Click Boss Bushing'],
                [$click150, 'Direct Fitment for Click 150/160'],
                [$pcx, 'Direct Fitment with 14g roller recommendation'],
                [$adv, 'Direct Fitment - High Torque Low End Pull'],
            ],
            'R1-CB-002' => [
                [$aerox, 'Standard 125mm Performance Bell'],
                [$nmax, 'Standard 125mm Performance Bell'],
                [$click125, 'Direct fitment on KZR/K36 Rear Hub'],
                [$click150, 'Direct fitment on K97 Rear Hub'],
                [$pcx, 'Optimized heat dissipation for PCX 160'],
            ],
            'R1-FB-003' => [
                [$aerox, 'Standard 20x12 Roller Dimensions (10g - 14g recommended)'],
                [$nmax, 'Standard 20x12 Roller Dimensions (11g - 13g recommended)'],
                [$click125, 'Standard 20x15 Dimensions (12g - 15g recommended)'],
                [$click150, 'Standard 20x15 Dimensions (13g - 16g recommended)'],
                [$mioSporty, 'Standard 15x12 Dimensions (7g - 10g recommended)'],
                [$mioI125, 'Standard 18x14 Dimensions (9g - 12g recommended)'],
            ],
            'R1-CS-004' => [
                [$aerox, '1000 RPM (Touring) / 1200 RPM (Sport) Fitment'],
                [$nmax, '1000 RPM / 1200 RPM Fitment'],
                [$click125, '1000 RPM / 1500 RPM Fitment'],
                [$click150, '1200 RPM / 1500 RPM Fitment'],
                [$adv, '1500 RPM for Hill Climb Performance'],
            ],
            'R1-CLS-005' => [
                [$aerox, 'Direct Shoe Spring Fitment'],
                [$nmax, 'Direct Shoe Spring Fitment'],
                [$click125, 'Direct Shoe Spring Fitment'],
                [$click150, 'Direct Shoe Spring Fitment'],
            ],
            'R1-CLA-006' => [
                [$aerox, '125mm Heavy Duty Performance Shoe'],
                [$nmax, '125mm Heavy Duty Performance Shoe'],
                [$click125, 'Anti-shudder composite lining'],
                [$click150, 'Anti-shudder composite lining'],
                [$pcx, 'Smooth engagement lining'],
            ],
            'R1-SP-007' => [
                [$aerox, 'Aerox / NMAX Standard 3-Piece Pack'],
                [$nmax, 'Aerox / NMAX Standard 3-Piece Pack'],
                [$click125, 'Click / Beat / PCX Standard 3-Piece Pack'],
                [$click150, 'Click 150 / 160 Standard 3-Piece Pack'],
            ],
            'R1-TD-008' => [
                [$aerox, 'Linear + Curved Dual Track Sheave'],
                [$nmax, 'Linear + Curved Dual Track Sheave'],
                [$click125, 'Dual Track Ramp for K36/KZR'],
                [$click150, 'Dual Track Ramp for K97'],
            ],
            'R1-BP-009' => [
                [$aerox, 'Front Caliper Ceramic Pad'],
                [$nmax, 'Front & Rear Caliper Fitment'],
                [$click125, 'Front Disc Caliper Fitment (Nissin Type)'],
                [$click150, 'Front Disc Caliper Fitment'],
                [$pcx, 'Front & Rear ABS Caliper Fitment'],
                [$adv, 'Front & Rear Wave Disc Fitment'],
            ],
            'R1-CC-010' => [
                [$aerox, 'Universal CVT Degreaser & Dust Blast'],
                [$nmax, 'Universal CVT Degreaser & Dust Blast'],
                [$click125, 'Universal CVT Degreaser & Dust Blast'],
                [$click150, 'Universal CVT Degreaser & Dust Blast'],
                [$mioSporty, 'Universal CVT Degreaser & Dust Blast'],
                [$mioI125, 'Universal CVT Degreaser & Dust Blast'],
            ],
            'R1-FO-011' => [
                [$aerox, 'Front Suspension Fork Hydraulic Fluid (65ml per leg)'],
                [$nmax, 'Front Suspension Fork Hydraulic Fluid (85ml per leg)'],
                [$click125, 'Front Fork Refill (55ml per leg)'],
                [$click150, 'Front Fork Refill (60ml per leg)'],
                [$pcx, 'Front Telescopic Fork Refill (110ml per leg)'],
                [$adv, 'Long Travel Suspension Fluid (120ml per leg)'],
            ],
        ];

        foreach ($mappings as $sku => $bikes) {
            $product = Product::where('sku', $sku)->first();
            if (!$product) continue;

            foreach ($bikes as [$bike, $notes]) {
                if (!$bike) continue;
                $product->compatibleMotorcycles()->syncWithoutDetaching([
                    $bike->id => ['fitment_notes' => $notes]
                ]);
            }
        }
    }
}
