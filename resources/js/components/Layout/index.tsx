import {
  AppShell,
  Avatar,
  Burger,
  Container,
  Group,
  Menu,
  rem,
  UnstyledButton,
  useMantineTheme,
} from '@mantine/core'
import React, { useState } from 'react'
import { useDisclosure } from '@mantine/hooks'
import { IconChevronDown, IconLogout, IconSettings } from '@tabler/icons-react'

export default function Layout({ children }: { children: React.ReactNode }) {
  const theme = useMantineTheme()
  const [opened, { toggle }] = useDisclosure(false)
  const [userMenuOpened, setUserMenuOpened] = useState(false)

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
      </AppShell.Header>

      <AppShell.Main>
        <Container>{children}</Container>
      </AppShell.Main>
    </AppShell>
  )
}
