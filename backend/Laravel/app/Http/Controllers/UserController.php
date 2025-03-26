<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Models\User;
use App\Models\Book;
class UserController extends Controller
{
    public $user;
    public $book;

    public function __construct(User $user, Book $book)
    {
        $this->user = $user;
        $this->book = $book;
    }
    
    public function index(): JsonResponse
    {
        $allUsers = $this->user->getAllUsers();

        return response()->json([
            'message' => 'ユーザー一覧',
            'users' => $allUsers,
        ]);
    }

    public function getUserBooks(Request $request): JsonResponse
    {
        $userBooks = $this->book->getUserBooks($request->user_id);
        return response()->json([
            'message' => 'ユーザーの本一覧',
            'userBooks' => $userBooks,
        ], 200);
    }
}
