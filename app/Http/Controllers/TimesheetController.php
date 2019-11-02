<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use Validator;
use App\Timesheet;
use App\User;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\Timesheet as TimeResource;

class TimesheetController extends Controller
{

    public function index()
    {
        $managerClients = Client::where('manager_id',Auth::id())->get();
        $managerTimesheets = Timesheet::where('client_id', $managerTimesheets->client_id)->get();
        return $managerTimesheets; 
    } 

    /**
     * Store a newly created resource in storage or update an existing one.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request,[
            'client_id' => 'required|integer',
            'date' => 'required|date',
            'from' => 'required|date',
            'to' => 'required|date',
            'comment' => 'nullable|string|max:400',
            'task' => 'required|string|max:60',
            'status' => 'nullable|string'
        ]);

        $timesheet_model = Timesheet::where('id',$request->timesheet_id)->first();
        $timesheet = $request->isMethod('put') ? Timesheet::findOrFail($timesheet_model->id)
        : new timesheet;

        $timesheet->id = $request->input('timesheet_id');
        $timesheet->client_id = $request->input('client_id');
        $timesheet->user_id = auth()->user()->id;
        $timesheet->date = $request->input('date');
        $timesheet->from = $request->input('from');
        $timesheet->to = $request->input('to');
        $timesheet->comment  = $request->input('comment');
        $timesheet->task = $request->input('task');
        // $timesheet->status = $request->input('status');

        if($timesheet->save()) {
            return response()->json([
                'message' => 'timesheet logged'
            ], 201);
        }
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $this->validate($request,[
            'id' => 'required|integer',
            'date' => 'required|date',
            'client_id'=> 'required|integer',
            'from' => 'required|date',
            'to' => 'required|date',
            'comment' => 'nullable|string|max:400',
            'task' => 'required|string|max:60',
        ]);

        $timesheet = Timesheet::where('id',$request->id)->first();
        $owner = DB::table('users')->where('id', $timesheet->user_id)->first();
        $user = auth()->user()->id;

        if($user != $owner->id)
            return response()->json([
                'message' => 'You dont own this timesheet'
            ], 401);

        $timesheet = timesheet::findOrFail($request->id); 
        $timesheet->date = $request->input('date');
        $timesheet->from = $request->input('from');
        $timesheet->to = $request->input('to');
        $timesheet->comment  = $request->input('comment ');
        $timesheet->task = $request->input('task');
        $timesheet->save();

        if($timesheet->save()) {
            return response()->json([
                'message' => 'timesheet updated'
            ], 201);
        }
    }
}
