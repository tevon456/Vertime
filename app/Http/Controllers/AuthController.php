<?php

namespace App\Http\Controllers;

use App\Notifications\SignupActivate;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Spatie\Permission\Models\Role;

// use Laravel\Socialite\Facades\Socialite;

class AuthController extends Controller
{

    /**
     * Login user and create token
     *
     * @param  [string] email
     * @param  [string] password
     * @param  [boolean] remember_me
     * @return [string] access_token
     * @return [string] token_type
     * @return [string] expires_at
     */
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
            'remember_me' => 'boolean',
        ]);
        $credentials = request(['email', 'password']);
        $credentials['deleted_at'] = null;
        $user = User::whereEmail($request['email'])->first();

        //Check if exist
        if ($user == null)
        {
            return response()->json([
                'message' => 'Username or password is incorrect',
            ], 401);
        }
        //Check if incorrect
        if (!Auth::attempt($credentials)) {
            return response()->json([
                'message' => 'Username or password is incorrect',
            ], 401);
        }

        $user = $request->user();
        $tokenResult = $user->createToken('Personal Access Token');
        $token = $tokenResult->token;
        //When should a token expire after being issued
        $token->expires_at = Carbon::now()->addDays(7);
        if ($request->remember_me) {
            $token->expires_at = Carbon::now()->addWeeks(2);
        }

        $token->save();
        return response()->json([
            'access_token' => $tokenResult->accessToken,
            'token_type' => 'Bearer',
            'expires_at' => Carbon::parse(
                $tokenResult->token->expires_at
            )->toDateTimeString(),
        ]);
    }

    /**
     * Logout user (Revoke the token)
     *
     * @return [string] message
     */
    public function logout(Request $request)
    {
        $request->user()->token()->revoke();
        return response()->json([
            'message' => 'Successfully logged out',
        ]);
    }

}
