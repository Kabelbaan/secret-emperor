<?php

namespace App\Data;

use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
class UserData extends Data
{
    public int $id;
    public string $discord_name;
    public string $discord_avatar;
    public string $discord_nickname;
    public string $discord_avatar_url;
}
