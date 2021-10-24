import { ReactNode } from 'react'
import { chakra, shouldForwardProp } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  },
})

interface ISectionProps {
  children: ReactNode
  delay?: number
}

const Section = ({ children, delay = 0 }: ISectionProps) => {
  const transition: any =
    {
      duration: 0.8,
      delay,
    }

  return (
    <StyledDiv
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={transition}
      mb={8}
    >
      {children}
    </StyledDiv>
  )
}

export default Section
