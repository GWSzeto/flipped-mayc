import React from 'react'

// styles
import ImageContainer from '../imageContainer'
import {
  Layout,
  SocialContainer,
  SocialLink,
} from './footer.styles'

const Footer = () => {
  return (
    <Layout>
      <ImageContainer width='11rem'>
        <img src='/assets/bayc-footer.jpg'/>
      </ImageContainer>

      <SocialContainer>
        <SocialLink href='twitter.com' target='_blank'>
          <img src='/assets/twitter.svg'/>
        </SocialLink>
        <SocialLink href='discord.com' target='_blank'>
          <img src='/assets/discord.svg'/>
        </SocialLink>
        <SocialLink href='etherscan.com' target='_blank'>
          <img src='/assets/etherscan.svg'/>
        </SocialLink>
      </SocialContainer>
    </Layout>
  )
}

export default Footer
