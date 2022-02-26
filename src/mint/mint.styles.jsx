import styled from 'styled-components'
import { Link as GenericLink } from 'react-router-dom'

export const Layout = styled.div`
  display: flex;
  flex-flow: column nowrap;
  min-height: 100vh;
  background-color: black;
  row-gap: 2.5rem;
`

export const Body = styled.div`
  display: flex;
  flex-flow: column nowrap;
  row-gap: 2.5rem;
  padding: 0 4rem;
`

export const Header = styled(GenericLink)`
  display: flex;
  justify-content: center;
`

export const Section = styled.div`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  flex-flow: ${({ flexFlow }) => flexFlow || 'row nowrap'};
  column-gap: ${({ columnGap }) => columnGap || 'normal'};
  row-gap: ${({ rowGap }) => rowGap || 'normal'};
`

export const TextContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: ${({ justifyContent }) => justifyContent};
  row-gap: 1rem;
`

export const Title = styled.div`
  font-weight: 900;
  font-size: 2.25rem;
  color: white;
  font-style: italic;
`

export const SubTitle = styled.div`
  font-weight: 900;
  font-size: 1.75rem;
  color: white;
  font-style: italic;
`

export const Text = styled.div`
  font-family: 'Montserrat', sans-serif;
  line-height: 1.5;
  font-size: 0.9em;
  color: white;
`

export const FourImageContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
`

export const Label = styled.div`
  color: #bfc500;
  font-size: 1.5rem;
  font-weight: 500;
  font-style: italic;
`

export const PriceText = styled(Text)`
  line-height: 2;
`

export const SoldOutBanner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 900;
  font-style: italic;
  background-color: #bfc500;
  padding: 2rem;
`

export const LargeLinkContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`

export const Link = styled.a`
  color: #bfc500;
`

export const LargeLink = styled(Link)`
  font-style: italic;
  font-size: 1.25rem;
  line-height: 1.75rem;
`