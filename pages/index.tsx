import { Box, Container, Heading } from '@chakra-ui/react'

const Index = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
        Hello, I'm a full-stack developer
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Madlife
          </Heading>
          <p>Developer</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Index
