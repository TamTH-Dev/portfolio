import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'

import theme from '../libs/theme'
import Fonts from '../components/Fonts'
import MainLayout from '../components/layouts/main'

const App = ({ Component, pageProps, router }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <MainLayout router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </MainLayout>
    </ChakraProvider>
  )
}

export default App
