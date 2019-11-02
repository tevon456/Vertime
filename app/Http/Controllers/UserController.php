<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Spatie\Permission\Models\Role;
use App\User;
use App\Timesheet;

class UserController extends Controller
{

    /**
     * Get the authenticated User's data
     *
     * @return [json] user object
     */
    public function user(Request $request)
    {
        $user = $request->user();
        $roles = $user->getRoleNames();
        return response()->json([
            'street'=> $user->street,
            'city'=> $user->city,
            'parish'=> $user->parish,
            'country'=> $user->country,
            "roles"=>$roles,
            "email"=>$user->email,
            "first_name"=>$user->first_name,
            "last_name"=>$user->last_name,
        ]);
    }

    public function userTimesheets(Request $request)
    {
        $user = auth()->user();
        return response()->json($user->timesheets);
    }

}
