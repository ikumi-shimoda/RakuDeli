<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
class UserController extends Controller
{
    public $user;

    public function __construct(User $user)
    {
        $this->user = $user;
    }
    public function index()
    {
        $allUsers = $this->user->getAllUsers();

        return response()->json([
            'message' => 'ユーザー一覧',
            'users' => $allUsers,
        ]);
    }
}
