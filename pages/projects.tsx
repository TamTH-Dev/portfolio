import React from 'react'
import { Box, Container, Flex, Spinner } from '@chakra-ui/react'

import ArticleLayout from '../components/layouts/article'

const Works = () => {
  return (
    <ArticleLayout title="Personal Projects">
      <Container>
        <Flex
          flexDirection="column"
          alignItems="center"
          fontSize={20}
          textAlign="center"
          mt={10}
        >
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="lg"
          />
          <Box mt={2}>Updating...</Box>
        </Flex>
        {/*         <Heading as="h3" fontSize={20} mb={4}> */}
        {/*           Works */}
        {/*         </Heading> */}
        {/*         <SimpleGrid columns={[1, 1, 2]} gap={6}> */}
        {/*           <Section> */}
        {/*             <WorkGridItem */}
        {/*               id="walknote" */}
        {/*               title="walknote" */}
        {/*               thumbnail={thumbWalknote} */}
        {/*             > */}
        {/*               Music recommendation app for iOS */}
        {/*             </WorkGridItem> */}
        {/*           </Section> */}
        {/*           <Section delay={0.1}> */}
        {/*             <WorkGridItem */}
        {/*               id="fourpainters" */}
        {/*               title="The four painters" */}
        {/*               thumbnail={thumbFourPainters} */}
        {/*             > */}
        {/*               A video work generated with deep learning, imitating famous four */}
        {/*               painters like Van Gogh */}
        {/*             </WorkGridItem> */}
        {/*           </Section> */}
        {/*           <Section delay={0.1}> */}
        {/*             <WorkGridItem id="menkiki" thumbnail={thumbMenkiki} title="Menkiki"> */}
        {/*               An app that suggests ramen(noodle) shops based on a given photo of */}
        {/*               the ramen you want to eat */}
        {/*             </WorkGridItem> */}
        {/*           </Section> */}
        {/*         </SimpleGrid> */}
      </Container>
    </ArticleLayout>
  )
}

export default Works
