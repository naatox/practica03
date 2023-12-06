<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Technologies;


class TechnologiesController extends Controller
{
    public function editTechnology(Request $request)
    {
        try{
            $this->validate($request, [
                'name' => ['string', 'max:255'],
                'percentage' => ['integer'],
                'year' => ['integer']
            ]);
            $technology = Technologies::where('id', $request->id)->update([
                'name' => $request->name,
                'percentage' => $request->percentage,
                'year' => $request->year
            ]);
            return response()->json([
                'success' => true,
                'message' => 'Tecnologia actualizado correctamente'
            ]);

        }catch(\Exception $e){
            return response()->json([
                'success' => false,
                'message' => 'Error al actualizar la tecnologia, ingreso datos validos'
            ]);
        }

    }
}
