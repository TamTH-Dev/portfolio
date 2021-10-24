import React from 'react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={useColorModeValue('light', 'dark')}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton
          aria-label="Toggle theme"
          background={useColorModeValue('c_magenta.light', 'c_yellow.dark')}
          _hover={{ backgroundColor: useColorModeValue('c_cyan.light', 'c_orange.dark') }}
          color={useColorModeValue('c_white.light', 'c_black.dark')}
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          borderRadius="lg"
          onClick={toggleColorMode}
        />
      </motion.div>
    </AnimatePresence>
  )
}

export default ThemeToggleButton
