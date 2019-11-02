<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Client;
use App\User;

class ClientController extends Controller
{

 /**
     * Returns client model as JSON.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Client::all();
    }

    
    /**
     * Returns client manager
     *
     * @return \Illuminate\Http\Response
     */
    public function manager($id)
    {
    	$client = Client::where('id',$id)->first();
    	$manager = User::where('id',$client->manager_id)->first();
    	return [
                'first_name' => $manager['first_name'],
                'last_name' => $manager['last_name'],
            ];
    }

}

