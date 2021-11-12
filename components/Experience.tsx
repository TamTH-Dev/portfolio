import { Box, HStack, VStack } from '@chakra-ui/react'

const Experience = () => {
  const experience = [
    {
      text: 'Graduated from FPT University, Software Engineering (GPA: 4.05/5)',
    },
    {
      text: 'Joined two projects, a medium project and a large project at FPT Software. Get more experience in writing documents, working in group and working in real software development process',
    },
    {
      text: 'Build a complete administrator web application with Angular, .NET Core and Entity Framework in 3-tier Architecture',
    },
    {
      text: 'Build small applications with ReactJS, NextJS, VueJS, ExpressJS and MongoDB',
    },
    {
      text: 'Build small system applications that relate to Machine Learning using Python, Flask and dependent libraries',
    },
    {
      text: 'Resolve problems on some coding challenge websites, such as HackerRank, LeetCode, Advent of Code',
    },
  ]
  return (
    <VStack spacing="1rem" alignItems="start">
      {experience.map((e, idx) => (
        <HStack spacing="0.75rem" alignItems="start" key={idx}>
          <Box pt="0.25rem">🍀</Box>
          <Box>{e.text}</Box>
        </HStack>
      ))}
    </VStack>
  )
}

export default Experience
