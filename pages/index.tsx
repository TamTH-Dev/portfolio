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
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Certifications from '../components/Certifications'
import Contacts from '../components/Contacts'
import Header from '../components/Header'

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
          <Header text="Objective" icon="🚀" />
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
                background={useColorModeValue('c_cyan.light', 'c_cyan.dark')}
                color={useColorModeValue('c_white.dark', 'c_black.dark')}
                _hover={{
                  background: useColorModeValue('c_blue.light', 'c_blue.dark'),
                }}
              >
                My personal projects
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Header text="Skills" icon="🛸" />
          <Skills />
        </Section>

        <Section delay={0.3}>
          <Header text="Education / Work Experience" icon="👨‍🎓" />
          <Experience />
        </Section>

        <Section delay={0.3}>
          <Header text="Certifications" icon="📑" />
          <Certifications />
        </Section>

        <Section delay={0.4}>
          <Header text="Interests" icon="❤️" />
          <Paragraph>Programming, Sports and Music</Paragraph>
        </Section>

        <Section delay={0.5}>
          <Header text="Contacts" icon="📬" />
          <Contacts />
        </Section>
      </Container>
    </ArticleLayout>
  )
}

export default Index
