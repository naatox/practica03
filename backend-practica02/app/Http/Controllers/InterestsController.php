<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Interests;

class InterestsController extends Controller
{
    public function editInterest(Request $request)
    {

        $interest = Interests::where('id', $request->id)->update([
            'name' => $request->name,
            'description' => $request->description
        ]);
        return response()->json([
            'success' => true,
            'message' => 'Interes actualizado correctamente'
        ]);
    }
}
