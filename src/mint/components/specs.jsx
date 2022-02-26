import React from 'react'

// component
import ImageContainer from '../../../components/imageContainer'

// styles
import {
  Section,
  TextContainer,
  SubTitle,
  Text,
  FourImageContainer,
  Label
} from '../mint.styles'

const Specs = () => (
  <Section columnGap='2rem' justifyContent='space-between'>
    <TextContainer >
      <SubTitle>
        THE SPECS
      </SubTitle>

      <Label>
        THE ORIGINAL FAYC
      </Label>

      <Text>
        Each FAYC is a flipped version of its BAYC counterpart.<br/><br/>

        The FAYCs are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS.<br/><br/>

        There are no members-only spaces to access.<br/><br/>
      </Text>
    </TextContainer>

    <ImageContainer width='25rem'>
      <img src='/assets/mysteryFlip.gif'/>
    </ImageContainer>
  </Section>     
)

export default Specs
