<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Http\JsonResponse;

class UserController extends Controller
{
    public $user;

    public function __construct(User $user)
    {
        $this->user = $user;
    }
    public function index(): JsonResponse
    {
        $allUsers = $this->user->getAllUsers();

        return response()->json([
            'message' => 'ユーザー一覧',
            'users' => $allUsers,
        ]);
    }
}
