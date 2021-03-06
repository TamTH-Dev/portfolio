import NextLink from 'next/link'
import Image from 'next/image'
import styled from '@emotion/styled'
import { Text } from '@chakra-ui/react'

const LogoBox = styled.span({
  fontWeight: 'bold',
  fontSize: '18px',
  display: 'inline-flex',
  alignItems: 'center',
  height: '30px',
  lineHeight: '30px',
  padding: '10px',
})

const Logo = () => {
  const demo =
    'https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif'
  return (
    <NextLink href="/">
      <a>
        <LogoBox>
          <Image src={demo} width={20} height={20} alt="Logo" />
          <Text ml={2} fontFamily="Lobster" fontSize={20}>
            Madlife
          </Text>
        </LogoBox>
      </a>
    </NextLink>
  )
}

export default Logo
