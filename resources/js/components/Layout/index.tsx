import {
  AppShell,
  Menu,
  Container,
  UnstyledButton,
  Group,
  Avatar,
  Text,
  Flex,
  Button,
} from '@mantine/core'
import React, { useState } from 'react'
import classes from './Layout.module.css'
import cx from 'clsx'
import { IconChevronDown, IconLogout } from '@tabler/icons-react'
import { usePage } from '@inertiajs/react'
import { SharedProps } from '@/types/shared'

export default function Layout({ children }: { children: React.ReactNode }) {
  const [userMenuOpened, setUserMenuOpened] = useState(false)
  const { user } = usePage<SharedProps>().props

  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header className={classes.header}>
        <Container>
          <Flex justify="flex-end">
            <Button
              display={user ? 'none' : 'inline'}
              component="a"
              href={route('login')}
              variant="filled"
            >
              Login
            </Button>
            <Menu
              width={260}
              position="bottom-end"
              transitionProps={{ transition: 'pop-top-right' }}
              onClose={() => setUserMenuOpened(false)}
              onOpen={() => setUserMenuOpened(true)}
              withinPortal
            >
              <Menu.Target>
                <UnstyledButton
                  display={user ? 'inline' : 'none'}
                  className={cx(classes.user, { [classes.userActive]: userMenuOpened })}
                >
                  <Group gap={7}>
                    <Avatar
                      src={user?.discord_avatar}
                      alt={user?.discord_nickname}
                      radius="xl"
                      size={20}
                    />
                    <Text fw={500} size="sm" lh={1} mr={3}>
                      {user?.discord_nickname}
                    </Text>
                    <IconChevronDown size={12} stroke={1.5} />
                  </Group>
                </UnstyledButton>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item
                  leftSection={<IconLogout size={16} stroke={1.5} />}
                  component="a"
                  href={route('logout')}
                >
                  Logout
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Flex>
        </Container>
      </AppShell.Header>

      <AppShell.Main>
        <Container>{children}</Container>
      </AppShell.Main>
    </AppShell>
  )
}
