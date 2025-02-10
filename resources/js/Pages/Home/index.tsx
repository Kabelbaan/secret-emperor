import { Title } from '@mantine/core'
import React from 'react'
import { usePage } from '@inertiajs/react'
import { SharedProps } from '@/types/shared'

export default function Home() {
  const { user } = usePage<SharedProps>().props
  const text: string = user ? `Welcome, ${user.discord_name}!` : `Not logged in!`

  return (
    <>
      <Title>{text}</Title>
    </>
  )
}
