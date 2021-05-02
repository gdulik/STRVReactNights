import styled from 'styled-components'
import theme from '../../common/theme'

export const CartWrapper = styled.ul`
  min-width: 50rem;
  width: 60%;
`

export const ItemWrapper = styled.li`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${theme.color.gray};
`

export const Item = styled.p`font-size: ${theme.fontSize.medium};`
