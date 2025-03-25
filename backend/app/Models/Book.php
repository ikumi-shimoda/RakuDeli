<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class Book extends Model
{
    protected $fillable = [
        'user_id',
        'title',
        'comment',
        'cover_image',
    ];

    public function store(Request $request)
    {
        $this->create([
            'user_id' => $request->user_id,
            'title' => $request->title,
            'comment' => $request->comment,
            'cover_image' => $request->cover_image,
        ]);
    }
}
