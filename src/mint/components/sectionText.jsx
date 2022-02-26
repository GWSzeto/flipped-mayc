import React from 'react'

// styles
import {
  TextContainer,
  SubTitle,
  Text,
} from '../mint.styles'

const SectionText = ({ title, text }) => (
  <TextContainer>
    <SubTitle>{title}</SubTitle>
    <Text>{text}</Text>
  </TextContainer>
)

export default SectionText
