import React from 'react'
import axios from 'axios'
import { Container, SimpleGrid } from '@chakra-ui/react'
import { GetStaticProps } from 'next'

import ArticleLayout from '../components/layouts/article'
import Section from '../components/Section'
import { RepoGridItem } from '../components/GridItem'

interface IProject {
  id: number
  html_url: string
  name: string
  description: string
}

interface IProjectsProps {
  repos: Array<IProject>
}

const Projects = ({ repos }: IProjectsProps) => {
  return (
    <ArticleLayout title="Personal Projects">
      <Container maxW="container.md">
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          {repos.map(repo => (
            <Section key={repo.id}>
              <RepoGridItem
                thumbnail="/images/github.png"
                id={repo.id}
                title={repo.name}
                url={repo.html_url}
              >
                {repo.description}
              </RepoGridItem>
            </Section>
          ))}
        </SimpleGrid>
      </Container>
    </ArticleLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const reposUrl = 'https://api.github.com/users/TamTH-Dev/repos'
  const res = await axios.get(reposUrl)

  return {
    props: {
      repos: res.data,
    },
    revalidate: 60 * 60 * 24, // Refresh data after 1 day
  }
}

export default Projects
