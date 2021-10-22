import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'

import theme from '../libs/theme'
import Fonts from '../components/Fonts'
import Layout from '../components/layouts/main'

const App = ({ Component, pageProps, router }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  )
}

export default App
