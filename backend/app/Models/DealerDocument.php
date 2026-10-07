<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DealerDocument extends Model
{
    use HasFactory;

    protected $fillable = [
        'dealer_application_id',
        'document_type',
        'file_name',
        'file_path',
        'mime_type',
        'file_size',
    ];

    public function application()
    {
        return $this->belongsTo(DealerApplication::class, 'dealer_application_id');
    }
}
