import styled from 'styled-components'

const ImageContainer = styled.div`
  height: ${({ height }) => height || 'auto'};
  width: ${({ width }) => width || 'auto'};

  & > img {
    max-width: 100%;
  }
`

export default ImageContainer
