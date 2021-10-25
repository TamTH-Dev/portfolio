import React, { ReactNode } from 'react'
import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import { NextRouter } from 'next/router'

import Navbar from '../Navbar'
import VoxelDog from '../VoxelDog'
import NoSsr from '../NoSsr'

interface IMainLayoutProps {
  children: ReactNode
  router: NextRouter
}

const MainLayout = ({ children, router }: IMainLayoutProps) => {
  return (
    <Box as="main">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Homepage - Madlife</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <NoSsr>
          <VoxelDog />
        </NoSsr>
        {children}
      </Container>
    </Box>
  )
}

export default MainLayout
