import React from 'react'

// styles
import {
  Section,
  PriceText,
  Label,
  SoldOutBanner,
  LargeLinkContainer,
  LargeLink
} from '../mint.styles'

const Pricing = () => (
  <Section flexFlow='column nowrap' rowGap='1.5rem' >
    <Label>
      PRICING
    </Label>
    
    <PriceText>
      .03Ξ per PHAYC for the first 2000 early birds.<br/>

      .04Ξ per PHAYC for PHAYCs 2000-4000.<br/>

      .06Ξ per PHAYC for PHAYCs 4000-10000.<br/>

      Legacy BAYC, MAYC and PHUNK holders ALWAYS pay .03Ξ.<br/>
    </PriceText>

    <SoldOutBanner>
      SOLD OUT
    </SoldOutBanner>

    <LargeLinkContainer>
      <LargeLink href='https://nftrade.com' target='_blank'>
        VIEW COLLECTION ON LOOKSRARE
      </LargeLink>
      <LargeLink href='https://nfttrade.com' target='_blank'>
        VIEW COLLECTION ON NFTRADE
      </LargeLink>
    </LargeLinkContainer>

  </Section>
)

export default Pricing
