<?php

namespace Tests\Unit\Models;

use Tests\TestCase;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;

class UserTest extends TestCase
{
    use RefreshDatabase;

    protected $user;

    public function setUp(): void
    {
        parent::setUp();
        $this->user = new User();
    }

    public function test_getAllUsers()
    {
        User::factory()->create();
        $allUserCount = $this->user->getAllUsers()->count();
        $this->assertSame($allUserCount, 1);
    }
}
