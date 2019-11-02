<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/login', function () {
    return response()->json([
        'message' => 'Unauthorized'
    ], 401);
})->name("login");

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });


//Passport auth routes
Route::group([
    'prefix' => 'auth',// eg/api/auth/login
    'middleware' => 'api',
    'middleware' => 'throttle:20,5'
], function () {
    Route::post('login', 'AuthController@login');
    Route::group([
        'middleware' => 'auth:api' //only api authorised user may access
    ], function () {
        Route::get('logout', 'AuthController@logout');
    });
});


Route::group(['prefix' => 'v1', 'middleware' => 'api'], function () {

    //USER AUTH
    Route::group([
        'prefix' => '/auth/user',
        'middleware' => ['auth:api'],
    ], function () {
        // Logged in user's data
        Route::get('/', 'UserController@user');
        // Logged in user's owned timesheets
        Route::get('/time', 'UserController@userTimesheets')->middleware('role:employee');
    });

    //TIME AUTH
    Route::group([
        'prefix' => 'auth/timesheet', 'middleware' => ['auth:api'],
    ], function () {
        // Create new timesheet
        Route::post('/', 'TimesheetController@store')->middleware('permission:create timesheet');
        // timesheets for managers
        Route::get('/manager', 'TimesheetController@index')->middleware('permission:approve timesheet');
        // Update timesheet data
        Route::patch('/update', 'TimesheetController@update')->middleware('permission:edit timesheet');
    });

    //CLIENT
    Route::group([
        'prefix' => 'auth/client', 'middleware' => ['auth:api']
    ], function () {
        // Show all clients
        Route::get('/', 'ClientController@index');
        // Show single property + protected fields
        Route::get('/manager/{id}', 'ClientController@manager');
    });
});
