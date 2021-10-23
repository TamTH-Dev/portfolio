import React from 'react'
import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

import ArticleLayout from '../../components/layouts/article'
import { Meta, Title } from '../../components/work'
import Paragraph from '../../components/Paragraph'

const Inkdrop = () => (
  <ArticleLayout title="Inkdrop">
    <Container>
      <Title>
        Inkdrop <Badge>2016-</Badge>
      </Title>
      <Paragraph>
        A Markdown note-taking app with 100+ plugins, cross-platform and
        encrypted data sync support. The life-time revenue is more than $200k.
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.inkdrop.app/">
            https://www.inkdrop.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, Electron, React Native</span>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820">
            How I’ve Attracted The First 500 Paid Users For My SaaS That Costs
            $5/mo <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
    </Container>
  </ArticleLayout>
)

export default Inkdrop
