<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DealerOrderItem extends Model
{
    use HasFactory;

    protected $fillable = [
        'dealer_order_id',
        'product_id',
        'product_name',
        'product_sku',
        'quantity',
        'unit_wholesale_price',
        'subtotal',
    ];

    protected $casts = [
        'unit_wholesale_price' => 'decimal:2',
        'subtotal' => 'decimal:2',
    ];

    public function order()
    {
        return $this->belongsTo(DealerOrder::class, 'dealer_order_id');
    }

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
