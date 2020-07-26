<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class LoginController extends Controller
{
    
    public function logged(Request $req) 
    {
        $user = $req->session()->get('user');
        return response()->json([
            'logged' => $logged !== null ? 'yes' : 'no'
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
                $req->session()->put('user', $name);
                $result = true;
            }
        }
        return response()->json([
            'result' => $result === true ? 'ok' : 'ng'
        ]);
    }

    public function logout(Request $req) 
    {
        $req->session()->forget('user');
        return response()->json([
            'result' => 'ok'
        ]);
    }

}
