<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function getUser(){
        return User::with('technologies','interests','networks')->get();

    }
    public function update(Request $request){
        $user = User::where('id', 1)->update([
            'name' => $request->name,
            'lastname' => $request->lastname,
            'summary' => $request->summary,
            'country' => $request->country,
            'age' => $request->age,
            'career' => $request->career,
            'semester' => $request->semester,
            'city' => $request->city,
            'email' => $request->email,
        ]);
        return response()->json([
            'success' => true,
            'message' => 'Usuario actualizado correctamente'
        ]);

    }
}
