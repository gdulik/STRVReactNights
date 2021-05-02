import React from 'react'
import { ButtonWrapper } from './styled'

const Button = (props) => (
  <ButtonWrapper {...props}>{props.children}</ButtonWrapper>
)

export default Button
