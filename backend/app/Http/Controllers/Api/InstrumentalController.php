<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Instrumental;

class InstrumentalController extends Controller
{
    public function index()
    {
        return Instrumental::all();
    }

    public function readbyid($id)
    {
        $inst = Instrumental::find($id);
        if (is_null($inst)) {
            return $this->sendError('Instrumental not found.');
        }
        return $inst;
    }
}
