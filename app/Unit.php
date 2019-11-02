<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Unit extends Model
{
    protected $appends = ['is_liked'];

    public function property()
    {
        return $this->belongsTo('App\Property');
    }

    public function images(){
        return $this->hasMany('App\UnitImage');
    }

    public function likes()
    {
        return $this->morphToMany('App\User', 'likeable')->where('likeables.liked', '=', true);
    }

    public function getIsLikedAttribute()
    {
        $like = $this->likes()->where('user_id', auth::id())->first();
        return ($like) ? true : false;
    }
}
