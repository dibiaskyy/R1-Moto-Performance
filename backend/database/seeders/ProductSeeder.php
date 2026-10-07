<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        $cvtTrans = Category::where('slug', 'cvt-transmission')->first();
        $cvtTuning = Category::where('slug', 'cvt-tuning-calibration')->first();
        $braking = Category::where('slug', 'braking-systems')->first();
        $fluids = Category::where('slug', 'fluids-lubricants')->first();
        $maintenance = Category::where('slug', 'maintenance-care')->first();

        $products = [
            // 1. Pulley Set
            [
                'category_id' => $cvtTrans->id,
                'name' => 'R1 High-Grade Pulley Set',
                'sku' => 'R1-PS-001',
                'slug' => 'r1-high-grade-pulley-set',
                'summary' => 'Engineered with optimized ramp angles and precision CNC machined surface for explosive acceleration.',
                'description' => 'The R1 High-Grade Pulley Set is crafted from premium lightweight aluminum alloy to maximize throttle response while maintaining superior durability under continuous high-RPM operation. Features engineered air cooling fins that efficiently channel airflow inside the CVT case to dissipate heat buildup.',
                'key_features' => [
                    'High-Grade Aluminum Alloy for reduced rotational mass',
                    'Precision CNC-Machined Pulley Faces for smooth belt travel',
                    'Optimized Ramp Angles for seamless low-to-high speed shift transitions',
                    'Integrated Air Fins for heat dissipation inside transmission case'
                ],
                'specs' => [
                    'Material' => 'A7075-T6 High-Grade Aircraft Aluminum Alloy',
                    'Face Angle' => '13.8 - 14 Degrees Precision Ramp',
                    'Finish' => 'CNC Diamond Cut & Micro-Polished',
                    'Warranty' => '6 Months Limited Performance Warranty'
                ],
                'suggested_retail_price' => 2450.00,
                'dealer_wholesale_price' => 1750.00,
                'stock_quantity' => 150,
                'is_featured' => true,
            ],

            // 2. Clutch Bell
            [
                'category_id' => $cvtTrans->id,
                'name' => 'R1 High-Performance Clutch Bell',
                'sku' => 'R1-CB-002',
                'slug' => 'r1-clutch-bell',
                'summary' => 'Stainless steel clutch bell featuring linear grooves, debris release holes, and exterior cooling wings.',
                'description' => 'Manufactured with high-strength heat-treated stainless steel to prevent warping under intense friction heat. The precision linear grooves clean clutch shoe glazing on every engagement, while perimeter dust holes allow clutch debris and hot gases to escape without slipping.',
                'key_features' => [
                    'Stainless Steel Construction resistant to constant friction and corrosion',
                    'Linear Grooves dissipate heat and refresh clutch shoe contact',
                    'Dust Release Holes prevent debris buildup and clutch drag',
                    'Cooling Wing Vanes promote rapid convective heat dissipation'
                ],
                'specs' => [
                    'Material' => 'Heat-Treated High-Strength Stainless Steel',
                    'Balancing' => 'Dynamic High-RPM Factory Balanced',
                    'Vane Profile' => 'Aerodynamic Heat-Dissipating External Fin Pattern',
                    'Diameter' => 'Standard OEM Spec & Oversized Performance Fitment'
                ],
                'suggested_retail_price' => 1850.00,
                'dealer_wholesale_price' => 1300.00,
                'stock_quantity' => 200,
                'is_featured' => true,
            ],

            // 3. Precision Flyball
            [
                'category_id' => $cvtTuning->id,
                'name' => 'R1 Precision Flyball Roller Weights (Set of 6)',
                'sku' => 'R1-FB-003',
                'slug' => 'r1-precision-flyball',
                'summary' => 'Calibrated roller weights available in 8g to 15g with heat-resistant self-lubricating composite casing.',
                'description' => 'Engineered for fine-tuning CVT acceleration and top speed. R1 Flyball weights use a high-density metallic brass core wrapped in high-temperature self-lubricating polymer that resists flat-spotting and premature wear under extreme racing conditions.',
                'key_features' => [
                    'High-Precision Gram Calibration (±0.05g tolerance)',
                    'Self-Lubricating Wear-Resistant Composite Outer Shell',
                    'Heavy-Duty Solid Brass Core for balanced centrifugal force',
                    'Prevents ramp plate gouging and roller binding'
                ],
                'specs' => [
                    'Available Weights' => '8g, 9g, 10g, 11g, 12g, 13g, 14g, 15g',
                    'Core' => 'Machined Solid Brass',
                    'Shell' => 'Heat-Stabilized Polyamide Composite',
                    'Pack Size' => '6 pieces per set'
                ],
                'suggested_retail_price' => 450.00,
                'dealer_wholesale_price' => 310.00,
                'stock_quantity' => 500,
                'is_featured' => false,
            ],

            // 4. Center Spring
            [
                'category_id' => $cvtTuning->id,
                'name' => 'R1 High-Tensile Center Spring',
                'sku' => 'R1-CS-004',
                'slug' => 'r1-high-tensile-center-spring',
                'summary' => 'Progressive rate torque center spring available in 1000 RPM, 1200 RPM, and 1500 RPM ratings.',
                'description' => 'Provides firm rear pulley back-pressure to eliminate belt slippage and deliver instantaneous downshifts when rolling on the throttle during corner exits or uphill riding. Made from silicon-chromium spring steel.',
                'key_features' => [
                    'Silicon-Chromium Alloy Spring Steel with anti-fatigue coating',
                    'Maintains consistent tension under extreme CVT case operating heat',
                    'Available in 1000 RPM, 1200 RPM, and 1500 RPM engagement calibrations'
                ],
                'specs' => [
                    'Material' => 'Si-Cr Alloy Steel with Electrophoretic Anti-Corrosion Coating',
                    'Ratings' => '1000 RPM (Touring), 1200 RPM (Sport), 1500 RPM (Race)',
                    'Preload Resistance' => 'High Fatigue Life (>100,000 cycles)'
                ],
                'suggested_retail_price' => 480.00,
                'dealer_wholesale_price' => 330.00,
                'stock_quantity' => 300,
                'is_featured' => false,
            ],

            // 5. Clutch Spring Set
            [
                'category_id' => $cvtTuning->id,
                'name' => 'R1 Clutch Spring Tuning Set (Set of 3)',
                'sku' => 'R1-CLS-005',
                'slug' => 'r1-clutch-spring-set',
                'summary' => 'High-engagement mini clutch springs for rapid clutch bite and instant takeoff.',
                'description' => 'Calibrated engagement springs designed to hold clutch shoes slightly longer into the engine powerband, delivering aggressive standing launches without bogging down.',
                'key_features' => [
                    'Pre-stressed high tensile alloy wire',
                    'Consistent RPM engagement across all 3 shoes',
                    'Prevents early clutch shudder during takeoff'
                ],
                'specs' => [
                    'Ratings' => '1000 RPM / 1500 RPM',
                    'Pack Size' => '3 pieces per set',
                    'Coating' => 'High-Visibility Heat Treated Color Finish'
                ],
                'suggested_retail_price' => 280.00,
                'dealer_wholesale_price' => 190.00,
                'stock_quantity' => 350,
                'is_featured' => false,
            ],

            // 6. Clutch Lining Assembly
            [
                'category_id' => $cvtTrans->id,
                'name' => 'R1 Heavy-Duty Clutch Lining Assembly',
                'sku' => 'R1-CLA-006',
                'slug' => 'r1-clutch-lining-assembly',
                'summary' => 'High-friction composite shoe assembly for heavy-duty torque transfer and zero clutch shudder.',
                'description' => 'Features high-density friction shoes bonded to reinforced backing plates. Formulated to resist glazing and overheating during repeated stop-and-go city riding or aggressive uphill load.',
                'key_features' => [
                    'Non-asbestos high-temperature composite friction material',
                    'Chatter-free progressive engagement',
                    'Reinforced pivot bushings for zero binding'
                ],
                'specs' => [
                    'Friction Material' => 'Aramid Fiber / Ceramic Composite Blend',
                    'Backing Plate' => 'High-Strength Steel Alloy',
                    'Fitment' => 'Standard 3-Shoe Scooter Assembly'
                ],
                'suggested_retail_price' => 1650.00,
                'dealer_wholesale_price' => 1150.00,
                'stock_quantity' => 180,
                'is_featured' => true,
            ],

            // 7. Slider Piece Set
            [
                'category_id' => $cvtTuning->id,
                'name' => 'R1 Precision Slider Piece Dampers (Set of 3)',
                'sku' => 'R1-SP-007',
                'slug' => 'r1-slider-piece-set',
                'summary' => 'Durable wear-resistant polymer slider dampers for noise reduction and smooth ramp plate glide.',
                'description' => 'Engineered from specialized polyacetal polymer that resists high-friction abrasion and engine vibration, preventing premature play between the ramp plate and variator boss.',
                'key_features' => [
                    'Low-friction abrasion-resistant engineering polymer',
                    'Tolerances eliminate ramp plate chatter and noise',
                    'Withstands continuous temperatures exceeding 180°C'
                ],
                'specs' => [
                    'Material' => 'Reinforced Polyacetal (POM-H)',
                    'Pack Size' => '3 pieces per set'
                ],
                'suggested_retail_price' => 180.00,
                'dealer_wholesale_price' => 120.00,
                'stock_quantity' => 450,
                'is_featured' => false,
            ],

            // 8. Torque Drive Assembly
            [
                'category_id' => $cvtTrans->id,
                'name' => 'R1 Racing Torque Drive Assembly',
                'sku' => 'R1-TD-008',
                'slug' => 'r1-racing-torque-drive',
                'summary' => 'Sliding sheave with precision dual-angle guide pin slots for continuous mid-to-high RPM acceleration curve.',
                'description' => 'Eliminates flat acceleration dips in stock torque drive tracks. Precision CNC-machined guide pin grooves provide dual selectable ramp angles for either aggressive sport response or smooth long-distance touring.',
                'key_features' => [
                    'Dual Selectable Ramp Angles (Straight / Curved Performance Tracks)',
                    'CNC Machined Steel with heat-treated surface hardness',
                    'High-grade O-rings and oil seals pre-installed to prevent grease leaks'
                ],
                'specs' => [
                    'Material' => 'Hardened Chromoly Steel Sheave',
                    'Pin Configuration' => 'Dual Track (Sport Curve / Race Linear)',
                    'Sealing' => 'Double Nitrile Rubber High-Temp O-Rings'
                ],
                'suggested_retail_price' => 2200.00,
                'dealer_wholesale_price' => 1550.00,
                'stock_quantity' => 120,
                'is_featured' => true,
            ],

            // 9. Ceramic Brake Pads
            [
                'category_id' => $braking->id,
                'name' => 'R1 Premium Ceramic Brake Pads',
                'sku' => 'R1-BP-009',
                'slug' => 'r1-ceramic-brake-pads',
                'summary' => 'Heat-resistant ceramic compound for progressive stopping power, minimal rotor wear, and zero brake fade.',
                'description' => 'Constructed from premium ceramic compound designed to withstand high temperatures and maintain stable braking efficiency during high-speed mountain descents and long touring rides. Produces low brake dust and silent operation.',
                'key_features' => [
                    'Premium Ceramic Compound Construction',
                    'Heat-Resistant Braking Material withstands prolonged hard braking',
                    'Smooth, consistent, and reliable braking performance in wet and dry conditions',
                    'Rotor-friendly formulation prolongs brake disc lifespan'
                ],
                'specs' => [
                    'Compound' => 'High-Density Non-Ferrous Ceramic Formula',
                    'Temperature Rating' => 'Up to 550°C Fade Resistance',
                    'Noise Level' => 'Ultra-Quiet / Anti-Squeal Chamfered Edges'
                ],
                'suggested_retail_price' => 380.00,
                'dealer_wholesale_price' => 250.00,
                'stock_quantity' => 400,
                'is_featured' => true,
            ],

            // 10. CVT Cleaner
            [
                'category_id' => $maintenance->id,
                'name' => 'R1 Professional CVT Aerosol Cleaner (450ml)',
                'sku' => 'R1-CC-010',
                'slug' => 'r1-professional-cvt-cleaner',
                'summary' => 'High-pressure aerosol degreaser rapidly removes belt dust, oil, and rubber residue from transmission parts.',
                'description' => 'Fast-evaporating solvent formula safely cleans variator faces, clutch bells, and springs without leaving any oily film that could cause belt slip. Safe on standard nitrile rubber seals.',
                'key_features' => [
                    'High-pressure spray blast reaches deep into pulley recesses',
                    'Fast evaporating with zero residue',
                    'Restores optimal friction between belt and pulley faces'
                ],
                'specs' => [
                    'Volume' => '450ml Spray Aerosol Can',
                    'Evaporation' => 'Rapid Dry (<30 seconds)'
                ],
                'suggested_retail_price' => 250.00,
                'dealer_wholesale_price' => 170.00,
                'stock_quantity' => 350,
                'is_featured' => false,
            ],

            // 11. Fork Oil
            [
                'category_id' => $fluids->id,
                'name' => 'R1 Heavy-Duty Suspension Fork Oil (200ml)',
                'sku' => 'R1-FO-011',
                'slug' => 'r1-heavy-duty-fork-oil',
                'summary' => 'Multi-viscosity hydraulic suspension fluid providing smooth rebound damping and zero seal swelling.',
                'description' => 'Formulated with advanced anti-foaming and anti-wear additives. Ensures consistent shock absorption over bumpy pavement and aggressive cornering without thermal thinning.',
                'key_features' => [
                    'Anti-Foaming Hydraulic Formula prevents damping cavitation',
                    'Conditioning agents protect front fork oil seals against hardening',
                    'Consistent damping feel in hot tropical climates'
                ],
                'specs' => [
                    'Volume' => '200ml Bottle',
                    'Viscosity Grades' => '10W (Comfort Touring) / 15W (Sport Stiff)'
                ],
                'suggested_retail_price' => 195.00,
                'dealer_wholesale_price' => 135.00,
                'stock_quantity' => 300,
                'is_featured' => false,
            ],
        ];

        foreach ($products as $prod) {
            Product::updateOrCreate(['sku' => $prod['sku']], $prod);
        }
    }
}
