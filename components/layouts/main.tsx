import React, { ReactNode } from 'react'
import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import { NextRouter } from 'next/router'

interface MainLayoutProps {
  children: ReactNode
  router: NextRouter
}

const Main = ({ children, router }: MainLayoutProps) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Madlife - Homepage</title>
      </Head>

      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  )
}

export default Main
