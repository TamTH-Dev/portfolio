import NextLink from 'next/link'
import Image from 'next/image'

import styled from '@emotion/styled'
import { Text, useColorModeValue } from '@chakra-ui/react'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 30px;
  padding: 10px;

  & img {
    transition: transform 0.25s ease-in-out;
  }

  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  const footPrintImg = `/images/footprint${useColorModeValue('', '-dark')}.png`
  return (
    <NextLink href="/">
      <a>
        <LogoBox>
          <Image src={footPrintImg} width={20} height={20} alt="Logo" />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily="M PLUS Rounded 1c"
            fontWeight="bold"
            ml={3}
          >
            Madlife
          </Text>
        </LogoBox>
      </a>
    </NextLink>
  )
}

export default Logo
