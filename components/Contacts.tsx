import React from 'react'
import {
  Button,
  Icon,
  Link,
  List,
  ListItem,
  useColorModeValue,
} from '@chakra-ui/react'
import {
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoTwitter,
} from 'react-icons/io5'
import { IconType } from 'react-icons/lib'

interface IContactProps {
  text: string
  href: string
  icon: IconType
}

const Contact = ({ text, href, icon }: IContactProps) => {
  return (
    <ListItem>
      <Link color="orange.200" href={href} target="_blank">
        <Button
          variant="ghost"
          color={useColorModeValue('c_green.light', 'c_green.dark')}
          leftIcon={<Icon marginTop="4px" as={icon} />}
        >
          {text}
        </Button>
      </Link>
    </ListItem>
  )
}

const Contacts = () => {
  const contacts = [
    {
      text: '@Tam Tran',
      href: 'https://www.linkedin.com/in/tam-tran-11a6ba1a1',
      icon: IoLogoLinkedin,
    },
    {
      text: '@madlife',
      href: 'https://github.com/TamTH-Dev',
      icon: IoLogoGithub,
    },
    {
      text: '@Madlife48902037',
      href: 'https://twitter.com/Madlife48902037',
      icon: IoLogoTwitter,
    },
    {
      text: '@Tâm Trần',
      href: 'https://www.facebook.com/profile.php?id=100005755451639',
      icon: IoLogoFacebook,
    },
  ]

  return (
    <List>
      {contacts.map(({ text, href, icon }, index) => (
        <Contact key={index} text={text} href={href} icon={icon} />
      ))}
    </List>
  )
}

export default Contacts
