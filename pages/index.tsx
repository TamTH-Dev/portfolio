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

import ArticleLayout from '../components/layouts/article'
import Section from '../components/Section'
import Paragraph from '../components/Paragraph'
import Bio from '../components/Bio'
import Skills from '../components/Skills'
import Contacts from '../components/Contacts'

const Index = () => {
  return (
    <ArticleLayout title="Homepage">
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.100')}
          p={3}
          mb={6}
          align="center"
        >
          My dream is becoming a great Full Stack Developer
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2">Madlife</Heading>
            <p>Developer</p>
          </Box>

          <Box flexShrink={0} mt={{ base: 4, md: 0 }} align="center">
            <Image
              borderColor="whiteAlpha.500"
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
            Objective
          </Heading>
          <Paragraph>
            Programmer with 3 years of experience in front-end development that
            is learned from self-study, internship semester and freelance
            projects. Also coming with the ability to think on the feet and
            openness to acquiring new skills. Seeking for the job as Front-end
            Developer in Sotware Companies and also having a desire to become a
            Full Stack Developer in the future.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/projects">
              <Button
                rightIcon={<ChevronRightIcon />}
                background={useColorModeValue('c_blue.light', 'c_blue.dark')}
                color={useColorModeValue('c_white.dark', 'c_black.dark')}
              >
                My personal projects
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Skills
          </Heading>
          <Skills />
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <Bio />
        </Section>

        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            I ❤️
          </Heading>
          <Paragraph>Programming, Sports and Music</Paragraph>
        </Section>

        <Section delay={0.5}>
          <Heading as="h3" variant="section-title">
            Contacts
          </Heading>
          <Contacts />
        </Section>
      </Container>
    </ArticleLayout>
  )
}

export default Index
