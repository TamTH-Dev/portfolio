import React from 'react'
import NextLink from 'next/link'
import {
  Box,
  Button,
  Container,
  Heading,
  Icon,
  Image,
  Link,
  List,
  ListItem,
  useColorModeValue,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'

import ArticleLayout from '../components/layouts/article'
import Section from '../components/Section'
import Paragraph from '../components/Paragraph'
import { BioSection, BioYear } from '../components/Bio'

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
          Hello, I&apos;m a full-stack developer
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2">Madlife</Heading>
            <p>Developer</p>
          </Box>

          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
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
            Work
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
            <NextLink href="/works">
              <Button
                rightIcon={<ChevronRightIcon />}
                background={useColorModeValue('c_blue.light', 'c_blue.dark')}
                color={useColorModeValue('c_text.dark', 'c_text.light')}
              >
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
          <Paragraph>Coding, Sports and Music</Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link color="orange.200" href="https://github.com/TamTH-Dev">
                <Button
                  variant="ghost"
                  color={useColorModeValue('c_green.light', 'c_green.dark')}
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @madlife
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/Madlife48902037">
                <Button
                  variant="ghost"
                  color={useColorModeValue('c_green.light', 'c_green.dark')}
                  leftIcon={<Icon as={IoLogoTwitter} />}
                >
                  @Madlife48902037
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.instagram.com/madlife_th">
                <Button
                  variant="ghost"
                  color={useColorModeValue('c_green.light', 'c_green.dark')}
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  @madlife
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </ArticleLayout>
  )
}

export default Index
