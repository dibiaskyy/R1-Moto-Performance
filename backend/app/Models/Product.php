<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'category_id',
        'name',
        'sku',
        'slug',
        'summary',
        'description',
        'key_features',
        'specs',
        'suggested_retail_price',
        'dealer_wholesale_price',
        'primary_image',
        'gallery_images',
        'stock_quantity',
        'stock_status',
        'is_featured',
        'is_active',
    ];

    protected $casts = [
        'key_features' => 'array',
        'specs' => 'array',
        'gallery_images' => 'array',
        'suggested_retail_price' => 'decimal:2',
        'dealer_wholesale_price' => 'decimal:2',
        'is_featured' => 'boolean',
        'is_active' => 'boolean',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    /**
     * Many-to-many relationship: Product to compatible motorcycle models
     */
    public function compatibleMotorcycles()
    {
        return $this->belongsToMany(MotorcycleModel::class, 'motorcycle_model_product')
                    ->withPivot('fitment_notes')
                    ->withTimestamps();
    }

    public function orderItems()
    {
        return $this->hasMany(DealerOrderItem::class);
    }

    // Scopes for easy catalog filtering
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    public function scopeFeatured($query)
    {
        return $query->where('is_featured', true);
    }

    public function scopeByCategory($query, $categoryId)
    {
        return $query->where('category_id', $categoryId);
    }
}
