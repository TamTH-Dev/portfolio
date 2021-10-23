import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: (props: object) => ({
    body: {
      bg: mode('#d5d6db', '#1a1b26')(props),
    },
  }),
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#414868',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
  Link: {
    baseStyle: (props: object) => ({
      color: mode('#2ac3de', '#ff9e64')(props),
      textUnderlineOffset: 3,
    }),
  },
}

const fonts = {
  heading: `'M PLUS Rounded 1c'`,
}

const colors = {
  glassTeal: '#bb9af7',
}

const config = {
  initialColorMode: 'dark',
  // useSystemColorMode: true,
}

const theme = extendTheme({
  config,
  styles,
  components,
  colors,
  fonts,
})

export default theme
