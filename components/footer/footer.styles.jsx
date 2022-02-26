import styled from 'styled-components'

export const Layout = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid white;
  border-bottom: 1rem solid #bfc500;
`

export const SocialContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  top: 40%;
  right: 3rem;
  column-gap: 1rem;
`

export const SocialLink = styled.a`
  width: 1.5rem;

  & > img {
    max-width: 100%;
    transform: scaleY(-1);
    filter: brightness(0) saturate(100%) invert(1);
  }
`