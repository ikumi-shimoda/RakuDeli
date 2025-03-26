<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;
use App\Models\Book;

class BookController extends Controller
{
    public $book;

    public function __construct(Book $book)
    {
        $this->book = $book;
    }
        
    public function store(Request $request): JsonResponse
    {
        DB::beginTransaction();
        try {
            $this->book->store($request);
            DB::commit();
            return response()->json([
                'status' => 'success',
                'message' => '本を登録しました',
            ], 200);
        } catch (Exception $e) {
            DB::rollBack();
            return response()->json([
                'status' => 'error',
                'message' => '本の登録に失敗しました',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
