import styled from 'styled-components/macro'
import theme from './../../common/theme'

export const ButtonWrapper = styled.button`
  background: ${({ disabled }) =>
    disabled ? theme.color.gray : theme.color.red};
  padding: 1rem;
  margin-top: 0.5rem;
  border: none;
  border-radius: ${theme.radius.basic};
  color: ${theme.color.white};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
`
