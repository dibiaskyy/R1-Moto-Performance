<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MotorcycleModel extends Model
{
    use HasFactory;

    protected $fillable = [
        'brand',
        'model_name',
        'slug',
        'engine_displacement',
        'year_range',
        'image_path',
        'is_popular',
    ];

    protected $casts = [
        'is_popular' => 'boolean',
    ];

    /**
     * Many-to-many relationship: Motorcycle model to compatible products
     */
    public function compatibleProducts()
    {
        return $this->belongsToMany(Product::class, 'motorcycle_model_product')
                    ->withPivot('fitment_notes')
                    ->withTimestamps();
    }

    public function riders()
    {
        return $this->hasMany(User::class, 'motorcycle_model_id');
    }
}
