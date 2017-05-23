<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Socialite;
use App\User;
use App\Role;

class LoginController extends Controller
{
    /**
     * Show login page
     */
    public function index() {
        return view('auth.login.index');
    }

    /**
     * Redirect the user to the google authentication page.
     *
     * @return Response
     */
    public function google()
    {
        return Socialite::driver('google')->redirect();
    }

    /**
     * Obtain the user information from google.
     *
     * @return Response
     */
    public function googleCallback()
    {
        $user = Socialite::driver('google')->user();

        $user = User::firstOrCreate([
            'email' => $user->getEmail(),
            'name' => $user->getName(),
            'password' => 'Google',
        ]);

        if (!$user->hasRole('basic')) {
            $user->attachRole(Role::where('name', 'basic')->first());
        }

        \Auth::login($user);
        return redirect()->route('tasks.index');
    }
}