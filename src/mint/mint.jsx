import React from 'react'

// component
import ImageContainer from '../../components/imageContainer'
import Intro from './components/intro'
import Pricing from './components/pricing'
import Specs from './components/specs'
import SectionText from './components/sectionText'
import Footer from '../../components/footer'

// styles
import {
  Layout,
  Body,
  Header,
  Link,
} from './mint.styles'

const Mint = () => {
  return (
    <Layout>
      <Body>
        <Header to='/' >
          <ImageContainer width='24rem'>
            <img src='/assets/mayc-logo.png'/>
          </ImageContainer>
        </Header>
        
        <Intro/>
        <Pricing/>
        <Specs/>
        <SectionText 
          title='THIS IS NOT A CLUB'
          text="When you buy a FAYC, you're simply buying the inverted version of a provably-rare BAYC. FAYC, like the team behind it, does not stand for anything. There is no value beyond what you already value. We hope your FAYC does not serve as your digital identity, nor open digital doors for you."
        />
        <SectionText
          title='ROADMAP ACTIVATIONS'
          text="There is no roadmap. We'll do what pheels right. Secondary marketplace coming soon. Stay as long as you would like."
        />
        <SectionText
          title='COMMUNITY TOOLS'
          text={(
            <div>
              Community is a strong word, but our <Link href='https://discord.com/' target='_blank'>discord</Link> is here. Our <Link href='https://twitter.com' target='_blank'>twitter</Link> DMs are open for any technical issues.
            </div>
            )}
        />
      </Body>

      <Footer/>
    </Layout>
  )
}

export default Mint
