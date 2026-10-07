<?php

namespace Database\Seeders;

use App\Models\MotorcycleModel;
use Illuminate\Database\Seeder;

class MotorcycleModelSeeder extends Seeder
{
    public function run(): void
    {
        $models = [
            [
                'brand' => 'Yamaha',
                'model_name' => 'Aerox 155 (V1 / V2)',
                'slug' => 'yamaha-aerox-155',
                'engine_displacement' => '155cc',
                'year_range' => '2017-2026',
                'is_popular' => true,
            ],
            [
                'brand' => 'Yamaha',
                'model_name' => 'NMAX 155 (V1 / V2 / Turbo)',
                'slug' => 'yamaha-nmax-155',
                'engine_displacement' => '155cc',
                'year_range' => '2015-2026',
                'is_popular' => true,
            ],
            [
                'brand' => 'Yamaha',
                'model_name' => 'Mio Sporty / Soulty',
                'slug' => 'yamaha-mio-sporty',
                'engine_displacement' => '115cc',
                'year_range' => '2008-2023',
                'is_popular' => true,
            ],
            [
                'brand' => 'Yamaha',
                'model_name' => 'Mio Soul i 125 / Mio i 125 (M3)',
                'slug' => 'yamaha-mio-i-125',
                'engine_displacement' => '125cc',
                'year_range' => '2015-2025',
                'is_popular' => true,
            ],
            [
                'brand' => 'Honda',
                'model_name' => 'Click 125i (Game Changer / V3)',
                'slug' => 'honda-click-125i',
                'engine_displacement' => '125cc',
                'year_range' => '2018-2026',
                'is_popular' => true,
            ],
            [
                'brand' => 'Honda',
                'model_name' => 'Click 150i / Click 160',
                'slug' => 'honda-click-150i-160',
                'engine_displacement' => '150cc - 160cc',
                'year_range' => '2018-2026',
                'is_popular' => true,
            ],
            [
                'brand' => 'Honda',
                'model_name' => 'PCX 160 (ABS / CBS)',
                'slug' => 'honda-pcx-160',
                'engine_displacement' => '157cc',
                'year_range' => '2021-2026',
                'is_popular' => true,
            ],
            [
                'brand' => 'Honda',
                'model_name' => 'ADV 150 / ADV 160',
                'slug' => 'honda-adv-160',
                'engine_displacement' => '157cc',
                'year_range' => '2020-2026',
                'is_popular' => true,
            ],
        ];

        foreach ($models as $model) {
            MotorcycleModel::updateOrCreate(['slug' => $model['slug']], $model);
        }
    }
}
