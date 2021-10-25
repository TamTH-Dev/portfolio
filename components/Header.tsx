import React from 'react'
import { Box, Heading } from '@chakra-ui/react'
import styled from '@emotion/styled'

const Icon = styled.span`
  font-size: 14px;
  margin-right: 8px;
`

const Underline = styled.span`
  width: 100%;
  position: absolute;
  bottom: -6px;
  left: 0;
  height: 3px;
  border-radius: 50px;
  background-color: #c0caf5;
`

const Header = ({ text, icon }: { text: string; icon: string }) => (
  <Heading as="h3" variant="section-title">
    <Box display="inline-block" position="relative">
      <Box display="flex" alignItems="center">
        <Icon>{icon}</Icon>
        {text}
      </Box>
      <Underline />
    </Box>
  </Heading>
)

export default Header
