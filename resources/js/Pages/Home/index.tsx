import { Button, Title } from '@mantine/core'
import React from 'react'
import { usePage } from '@inertiajs/react'
import { SharedProps } from '@/types/shared'

type HomeProps = SharedProps & {
  test?: string
}

export default function Home() {
  const { user } = usePage<HomeProps>().props
  const text: string = user ? `Welcome, ${user.discord_name}!` : `Not logged in!`

  return (
    <>
      <Title>{text}</Title>
      {user ? (
        <Button component="a" href={route('logout')} variant="filled" color="red">
          Logout
        </Button>
      ) : (
        <Button component="a" href={route('login')} variant="filled">
          Login
        </Button>
      )}
    </>
  )
}
