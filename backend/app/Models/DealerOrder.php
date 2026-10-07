<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DealerOrder extends Model
{
    use HasFactory;

    protected $fillable = [
        'order_reference_no',
        'dealer_application_id',
        'user_id',
        'subtotal',
        'discount_amount',
        'total_amount',
        'pdf_file_path',
        'status',
        'notes',
    ];

    protected $casts = [
        'subtotal' => 'decimal:2',
        'discount_amount' => 'decimal:2',
        'total_amount' => 'decimal:2',
    ];

    public function application()
    {
        return $this->belongsTo(DealerApplication::class, 'dealer_application_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function items()
    {
        return $this->hasMany(DealerOrderItem::class);
    }
}
