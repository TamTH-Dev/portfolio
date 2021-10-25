import React from 'react'
import { Box, Heading, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const Icon = styled.span({
  fontSize: '14px',
  marginRight: '8px',
})

const Underline = styled.span<{ underlineColor: string }>(
  {
    width: '100%',
    position: 'absolute',
    bottom: '-6px',
    left: 0,
    height: '3px',
    borderRadius: '50px',
  },
  ({ underlineColor }) => ({
    backgroundColor: underlineColor,
  })
)

const Header = ({ text, icon }: { text: string; icon: string }) => {
  const underlineColor = useColorModeValue('#0f0f14', '#c0caf5')
  return (
    <Heading as="h3" variant="section-title">
      <Box display="inline-block" position="relative">
        <Box display="flex" alignItems="center">
          <Icon>{icon}</Icon>
          {text}
        </Box>
        <Underline underlineColor={underlineColor} />
      </Box>
    </Heading>
  )
}

export default Header
