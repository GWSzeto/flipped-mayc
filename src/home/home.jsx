
// components
import Footer from '../../components/footer'
import ImageContainer from '../../components/imageContainer'

// styles
import {
  Layout,
  Header,
  BodyImageContainer,
  OverlaidContainer,
  OverlaidTextContainer,
  OverlaidText,
  EnterButton,
  ScrollDownContainer,
  VertText,
  BodyText,
} from './home.styles'

const Home = () => {
  return (
    <Layout>
      <Header to='/'>
        <ImageContainer width='24rem'>
          <img src='/assets/mayc-logo.png' />
        </ImageContainer>
      </Header>

      <BodyImageContainer>
        <ImageContainer>
          <img src='/assets/mayc-hero.jpg'/>
        </ImageContainer>

        <OverlaidContainer>
          <OverlaidTextContainer>
            <OverlaidText>
              PHCK IT <br/>
              JUST <br/>
              FLIP IT
            </OverlaidText>

            <EnterButton to='/mint'>
              ENTER
            </EnterButton>
          </OverlaidTextContainer>

          <ScrollDownContainer>
            <VertText>
              ← SCROLL DOWN
            </VertText>
          </ScrollDownContainer>
        </OverlaidContainer> 
      </BodyImageContainer>

      <BodyText>
        A limited NFT collection where the token itself offers no membership and no allegiance<br/>
        Just kick it with us and watch them flip it. 
      </BodyText>

      <Footer />

    </Layout>
  )
}

export default Home
