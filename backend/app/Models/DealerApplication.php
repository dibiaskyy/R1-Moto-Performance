<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DealerApplication extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'application_reference_no',
        'business_name',
        'owner_name',
        'email',
        'phone',
        'business_address',
        'city',
        'province',
        'years_in_business',
        'facebook_page',
        'status',
        'admin_remarks',
        'reviewed_at',
    ];

    protected $casts = [
        'reviewed_at' => 'datetime',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function documents()
    {
        return $this->hasMany(DealerDocument::class);
    }

    public function orders()
    {
        return $this->hasMany(DealerOrder::class);
    }
}
