declare namespace App.Data {
  export type AuthData = {
    user: App.Data.UserData
  }
  export type UserData = {
    id: number
    discord_name: string
    discord_avatar: string
    discord_nickname: string
    discord_avatar_url: string
  }
}
