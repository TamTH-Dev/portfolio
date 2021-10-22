import React from 'react'
import NextLink from 'next/link'
import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  useColorModeValue,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

import Section from '../components/Section'
import Paragraph from '../components/Paragraph'
import { BioSection, BioYear } from '../components/Bio'

const Index = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        mt={6}
        align="center"
      >
        Hello, I&apos;m a full-stack developer
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Madlife
          </Heading>
          <p>Developer</p>
        </Box>

        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w={100}
            h={100}
            objectFit="cover"
            display="inline-block"
            borderRadius="50%"
            src="/images/profile.jpg"
            alt="Profile Image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Programmer with 3 years of experience in front-end development that is
          learned from self-study, internship semester and freelance projects.
          Also coming with the ability to think on the feet and openness to
          acquiring new skills. Seeking for the job as Front-end Developer in
          Sotware Companies and also having a desire to become a Full Stack
          Developer in the future.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1999</BioYear>
          Born in Binh Duong, Vietnam.
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Gradutate from FPT University with the degree in Software Engineer
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Coding, Sport, Music and Games
        </Paragraph>
      </Section>
    </Container>
  )
}

export default Index
