import React, { ReactNode } from 'react'
import { Box, HStack, Link, VStack, useColorModeValue } from '@chakra-ui/react'

const LinkStyle = ({
  href,
  target,
  children,
}: {
  href: string
  target: string
  children: ReactNode
}) => {
  const color = useColorModeValue('#166775', '#2ac3de')
  return (
    <Link
      href={href}
      target={target}
      sx={{
        '&:hover': {
          textDecoration: 'underline !important',
          textDecorationColor: `${color} !important`,
          textUnderlineOffset: '4px',
        },
      }}
    >
      {children}
    </Link>
  )
}

const Certifications = () => {
  const certifications = [
    {
      text: 'Azure Fundamentals from Microsoft',
      icon: <i className="fab fa-microsoft"></i>,
      href: 'https://www.credly.com/badges/e4949347-4ccb-46bb-a522-d14e32c2a09e?source=linked_in_profile',
    },
    {
      text: 'Problem Solving (Basic) from HackerRank',
      icon: <i className="fab fa-hackerrank"></i>,
      href: 'https://www.hackerrank.com/certificates/cbff58a55fc7',
    },
    {
      text: 'Responsive Web Design from freeCodeCamp',
      icon: <i className="fab fa-free-code-camp"></i>,
      href: 'https://www.freecodecamp.org/certification/madlife/responsive-web-design',
    },
    {
      text: 'Javascript Algorithms and Data Structures',
      icon: <i className="fab fa-free-code-camp"></i>,
      href: 'https://www.freecodecamp.org/certification/madlife/javascript-algorithms-and-data-structures',
    },
    {
      text: 'Front End Development Libraries from freeCodeCamp',
      icon: <i className="fab fa-free-code-camp"></i>,
      href: 'https://www.freecodecamp.org/certification/madlife/front-end-development-libraries',
    },
  ]

  const color = useColorModeValue('c_blue.light', 'c_blue.dark')

  return (
    <VStack spacing="1rem" alignItems="start">
      {certifications.map((cert, idx) => (
        <LinkStyle href={cert.href} target="_blank" key={idx}>
          <HStack spacing="0.75rem" alignItems="start">
            <Box color={color}>{cert.icon}</Box>
            <Box fontWeight="500" color={color}>
              {cert.text}
            </Box>
          </HStack>
        </LinkStyle>
      ))}
    </VStack>
  )
}

export default Certifications
