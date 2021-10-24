import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'

const BioSection = styled(Box)`
  padding-left: 3.4rem;
  text-indent: -3.4rem;
`

const BioYear = styled.span`
  font-weight: bold;
  margin-right: 1rem;
`

const Bio = () => {
  const bios = [
    {
      year: 1999,
      text: 'Born in Binh Duong, Vietnam',
    },
    {
      year: 2021,
      text: 'Gradutate from FPT University with the degree in Software Engineer',
    },
  ]
  return (
    <>
      {bios.map((bio, index) => (
        <BioSection key={index}>
          <BioYear>{bio.year}</BioYear>
          {bio.text}
        </BioSection>
      ))}
    </>
  )
}

export default Bio
