<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use App\Http\Resources\AccountResource;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class AccountController extends Controller
{

    /**
     * @return JsonResponse
     */
    public function show()
    {
        return new AccountResource(Auth::user());
    }
}