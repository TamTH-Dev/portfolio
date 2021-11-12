import React from 'react'
import { Box, Flex } from '@chakra-ui/react'

const Skill = ({ skill }: { skill: string }) => {
  return (
    <Box
      color="c_black.dark"
      bg="c_magenta.dark"
      borderRadius="lg"
      px={2}
      py={1}
      fontSize={14}
      fontWeight={500}
    >
      {skill}
    </Box>
  )
}

const Skills = () => {
  return (
    <Box>
      <Flex gridColumnGap={4} gridRowGap={4} flexWrap="wrap">
        <Skill skill="HTML" />
        <Skill skill="CSS" />
        <Skill skill="SCSS" />
        <Skill skill="Javascript" />
        <Skill skill="Typescript" />
        <Skill skill="ReactJS" />
        <Skill skill="Angular" />
        <Skill skill="VueJS" />
        <Skill skill="NodeJS" />
        <Skill skill="ExpressJS" />
        <Skill skill="MongoDB" />
        <Skill skill="Python" />
        <Skill skill="Linux" />
        <Skill skill="Git" />
        <Skill skill="Docker" />
        <Skill skill="Java" />
      </Flex>
    </Box>
  )
}

export default Skills
