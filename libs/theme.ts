import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

import customColors from './colors'

const { light, dark } = customColors

const styles = {
  global: (props: object) => ({
    body: {
      background: mode(light.white, dark.black)(props),
    },
    div: {
      color: mode(light.black, dark.white)(props),
    },
    p: {
      color: mode(light.black, dark.white)(props),
    },
    a: {
      textDecoration: 'none !important',
      color: mode(light.black, dark.white)(props),
    },
    h1: {
      color: mode(light.black, dark.white)(props),
    },
    h2: {
      color: mode(light.black, dark.white)(props),
    },
    h3: {
      color: mode(light.black, dark.white)(props),
    },
    h4: {
      color: mode(light.black, dark.white)(props),
    },
    h5: {
      color: mode(light.black, dark.white)(props),
    },
    h6: {
      color: mode(light.black, dark.white)(props),
    },
  }),
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        fontSize: 24,
        marginTop: 4,
        marginBottom: 6,
      },
    },
  },
}

const fonts = {
  heading: 'Dosis',
  body: 'Roboto, Helvetica, Arial, sans-serif',
}

const colors = {
  c_white: {
    light: light.white,
    dark: dark.white,
  },
  c_black: {
    light: light.black,
    dark: dark.black,
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
}

const theme = extendTheme({
  config,
  styles,
  components,
  colors,
  fonts,
})

export default theme
