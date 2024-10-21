<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

class AuthController extends Controller
{
    public function redirectToDiscord()
    {
        return Socialite::driver('discord')->scopes(config('services.discord.scopes'))->redirect();
    }

    public function handleDiscordCallback(): RedirectResponse
    {
        $discordUser = Socialite::driver('discord')->user();

        /* @var User $wegoUser */
        $wegoUser = User::updateOrCreate([
            'discord_id' => $discordUser->getId(),
        ], [
            'email' => $discordUser->getEmail(),
            'discord_nickname' => $discordUser->getNickname(),
            'discord_name' => $discordUser->getName(),
            'discord_avatar' => $discordUser->getAvatar(),
            'discord_token' => $discordUser->token,
            'discord_refresh_token' => $discordUser->refreshToken,
            'email_verified_at' => now()
        ]);

        Auth::login($wegoUser);
        return redirect('/');
    }

    public function logout(Request $request): RedirectResponse
    {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/');
    }
}
