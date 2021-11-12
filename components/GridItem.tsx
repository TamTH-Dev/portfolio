import { ReactNode } from 'react'
import NextLink from 'next/link'
import {
  Box,
  Text,
  LinkBox,
  LinkOverlay,
  Image,
  useColorModeValue,
} from '@chakra-ui/react'
import { Global } from '@emotion/react'

interface IRepoGridItemProps {
  id: number
  children?: ReactNode
  title: string
  thumbnail: string
  url: string
}

export const RepoGridItem = ({
  children,
  id,
  title,
  thumbnail,
  url,
}: IRepoGridItemProps) => (
  <Box w="100%" align="center">
    <NextLink href={`/works/${id}`}>
      <LinkBox cursor="pointer">
        <Box sx={{ aspectRatio: 4 / 3 }} w="100%" position="relative">
          <Image src={thumbnail} alt={title} className="grid-item-thumbnail" />
        </Box>
        <LinkOverlay href={url}>
          <Text
            color={useColorModeValue('c_orange.light', 'c_orange.dark')}
            mt={2}
            fontSize={20}
            fontWeight={500}
          >
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 10px;
      }
    `}
  />
)
