<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Networks;

class NetworksController extends Controller
{
    public function editNetwork(Request $request)
    {
        $network = Networks::where('id', $request->id)->update([
            'name' => $request->name,
            'url' => $request->url
        ]);
        return response()->json([
            'success' => true,
            'message' => 'Red social actualizada correctamente'
        ]);
    }
}
