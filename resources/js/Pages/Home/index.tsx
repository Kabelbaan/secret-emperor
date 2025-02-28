import { Title } from '@mantine/core'
import { usePage } from '@inertiajs/react'
import { SharedProps } from '@/types/shared'

export default function Home() {
  const { auth } = usePage<SharedProps>().props
  const text: string = auth.user ? `Welcome, ${auth.user.discord_name}!` : `Not logged in!`

  return (
    <>
      <Title>{text}</Title>
    </>
  )
}
