import { Container, Heading, SimpleGrid } from '@chakra-ui/react'

import ArticleLayout from '../components/layouts/article'
import Section from '../components/Section'
import { WorkGridItem } from '../components/GridItem'

import thumbWalknote from '../public/images/works/walknote_eyecatch.png'
import thumbFourPainters from '../public/images/works/the-four-painters_eyecatch.jpg'
import thumbMenkiki from '../public/images/works/menkiki_eyecatch.png'

const Works = () => {
  return (
    <ArticleLayout title="Works">
      <Container>

        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="walknote"
              title="walknote"
              thumbnail={thumbWalknote}
            >
              Music recommendation app for iOS
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem
              id="fourpainters"
              title="The four painters"
              thumbnail={thumbFourPainters}
            >
              A video work generated with deep learning, imitating famous four
              painters like Van Gogh
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem id="menkiki" thumbnail={thumbMenkiki} title="Menkiki">
              An app that suggests ramen(noodle) shops based on a given photo of
              the ramen you want to eat
            </WorkGridItem>
          </Section>
        </SimpleGrid>

      </Container>
    </ArticleLayout>
  )
}

export default Works
