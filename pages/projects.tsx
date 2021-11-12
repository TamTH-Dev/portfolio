import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container, SimpleGrid } from '@chakra-ui/react'

import ArticleLayout from '../components/layouts/article'
import Section from '../components/Section'
import { RepoGridItem } from '../components/GridItem'

interface IRepo {
  id: number
  html_url: string
  name: string
  description: string
}

const Works = () => {
  const [repos, setRepos] = useState([])
  const reposUrl = 'https://api.github.com/users/TamTH-Dev/repos'

  useEffect(() => {
    const fetchRepos = async () => {
      const res = await axios.get(reposUrl)
      setRepos(res.data as [])
    }

    fetchRepos()
  }, [])

  return (
    <ArticleLayout title="Personal Projects">
      <Container maxW="container.md">
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          {repos.map((repo: IRepo) => (
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

export default Works
