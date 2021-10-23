import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

import customColors from './colors'

const { light, dark } = customColors

const styles = {
  global: (props: object) => ({
    body: {
      background: mode(light.background, dark.background)(props),
    },
    div: {
      color: mode(light.text, dark.text)(props)
    },
    p: {
      color: mode(light.text, dark.text)(props)
    },
    a: {
      textDecoration: 'none !important',
      color: mode(light.text, dark.text)(props)
    },
    h1: {
      color: mode(light.text, dark.text)(props)
    },
    h2: {
      color: mode(light.text, dark.text)(props)
    },
    h3: {
      color: mode(light.text, dark.text)(props)
    },
    h4: {
      color: mode(light.text, dark.text)(props)
    },
    h5: {
      color: mode(light.text, dark.text)(props)
    },
    h6: {
      color: mode(light.text, dark.text)(props)
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
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
}

const fonts = {
  heading: `'M PLUS Rounded 1c'`,
}

const colors = {
  c_background: {
    light: light.background,
    dark: dark.background,
  },
  c_text: {
    light: light.text,
    dark: dark.text,
  },
  c_red: {
    light: light.red,
    dark: dark.red,
  },
  c_orange: {
    light: light.orange,
    dark: dark.orange,
  },
  c_yellow: {
    light: light.yellow,
    dark: dark.yellow,
  },
  c_green: {
    light: light.green,
    dark: dark.green,
  },
  c_magenta: {
    light: light.magenta,
    dark: dark.magenta,
  },
  c_blue: {
    light: light.blue,
    dark: dark.blue,
  },
  c_cyan: {
    light: light.cyan,
    dark: dark.cyan,
  },
  c_gray: {
    light: light.gray,
    dark: dark.gray,
  },
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
