
import React from 'react'

// component
import ImageContainer from '../../../components/imageContainer'

// styles
import {
  Section,
  TextContainer,
  Title,
  Text,
  FourImageContainer
} from '../mint.styles'

const Intro = () => (
  <Section columnGap='2rem' >
    <TextContainer>
      <Title>
        JUST KICK IT AND WATCH THEM FLIP IT. MINT A FLIP
      </Title>

      <Text>
        A limited NFT collection where the token itself offers no 
        membership and no allegiance.
        Flip it with us. FAYC is a collection of 17,680 NFTs—unique 
        digital collectibles living on the Ethereum blockchain. 
        Your FAYC does not double as a membership card, 
        and grants no access to any members-only benefits.
      </Text>
    </TextContainer>

    <FourImageContainer>
      <ImageContainer width='12rem'>
        <img src='/assets/1486.png'/>
      </ImageContainer>
      <ImageContainer width='12rem'>
        <img src='/assets/1550.png'/>
      </ImageContainer>
      <ImageContainer width='12rem'>
        <img src='/assets/1594.png'/>
      </ImageContainer>
      <ImageContainer width='12rem'>
        <img src='/assets/1601.png'/>
      </ImageContainer>
    </FourImageContainer>
  </Section>     
)

export default Intro
