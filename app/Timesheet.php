<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Timesheet extends Model
{

    public function user()
    {
        return $this->belongsTo('App\User');
    }

}
