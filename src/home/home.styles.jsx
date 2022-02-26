import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Layout = styled.div`
  display: flex;
  flex-flow: column nowrap;
  min-height: 100vh;
  background-color: black;
`

export const Header = styled(Link)`
  position: absolute;
  top: 75px;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 555;
`

export const BodyImageContainer = styled.div`
  position: relative;
  margin: 65px;
  margin-bottom: 0;
`

export const OverlaidContainer = styled.div`
  position: absolute;
  display: flex;
  background-color: black;
  width: fit-content;
  bottom: 0;
  left: 0;
`

export const OverlaidTextContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 1.5rem 0;
  row-gap: 0.5rem;
  border-bottom: 1px white solid;
`

export const OverlaidText = styled.h1`
  color: white;
  font-style: italic;
  font-size: 2.25rem;
  font-weight: 900;
  line-height: 2.5rem;
  letter-spacing: 2px;
`

export const EnterButton = styled(Link)`
  display: flex;
  justify-content: center;
  padding: 1.25rem;
  background-color: #bfc500;
  font-weight: 700;
  border-radius: 0.5rem;
  text-decoration: none;
  color: black;
  box-sizing: border-box;
  width: 18rem;
`

export const ScrollDownContainer = styled.div`
  position: relative;
  padding: 1.5rem 0;
  width: 3.5rem;
`

export const VertText = styled.div`
  color: white;
  position: absolute;
  transform: translateX(-50%) translateY(-50%) rotate(-90deg);
  width: max-content;
  top: 50%;
  left: 50%;
  font-style: italic;
  font-size: 0.85rem;
  line-height: 1rem;
  word-spacing: 2px;
  animation: blinker 1.5s linear infinite;

  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
`

export const BodyText = styled.div`
  display: flex;
  padding: 4rem 65px; 
  color: white;
  line-height: 1.5;
  font-family: 'Montserrat', sans-serif;
`
