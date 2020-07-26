<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class LoginController extends Controller
{
    
    public function logged(Request $req) 
    {
        $logged = $req->session()->get('logged');
        return response()->json([
            'logged' => $logged === true ? 'yes' : 'no'
        ]);
    }

    public function login(Request $req)
    {
        $result = false;
        $name = $req->input('name');
        $pass = $req->input('password');
        $found = User::where('name', $name)->first();
        if ($found !== null) {
            if ($found->password === $pass) {
                $result = true;
            }
        }
        return response()->json([
            'result' => $result === true ? 'ok' : 'ng'
        ]);
    }

}
