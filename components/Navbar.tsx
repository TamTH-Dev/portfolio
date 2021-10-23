import React, { ReactNode } from 'react'
import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { HamburgerIcon } from '@chakra-ui/icons'

import Logo from './Logo'
import ThemeToggleButton from './ThemeToggleButton'

interface ILinkItemProps {
  href: string
  path: string
  children: ReactNode
}

interface INavbarProps {
  path: string
}

const LinkItem = ({ href, path, children }: ILinkItemProps) => {
  const active = path === href
  const bgActiveColor = useColorModeValue('c_red.light', 'c_red.dark')
  const fgActiveColor = useColorModeValue('c_text.dark', 'c_text.light')
  const fgInactiveColor = useColorModeValue('c_text.light', 'c_text.dark')
  return (
    <NextLink href={href}>
      <Link
        p={2}
        bg={active ? bgActiveColor : undefined}
        color={active ? fgActiveColor : fgInactiveColor}
        borderRadius="10px"
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = (props: INavbarProps) => {
  const { path } = props
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#d5d6db', '#1a1b26')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        flexWrap="wrap"
        align="center"
        justifyContent="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem
            href="/works" path={path}>
            Works
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                aria-label="Options"
                variant="outline"
              />

              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href="/works" passHref>
                  <MenuItem as={Link}>Works</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
