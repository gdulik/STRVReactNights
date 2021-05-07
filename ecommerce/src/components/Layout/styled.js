import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Wrapper = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Header = styled.header`
  padding: 3rem;
  border-bottom: 0.1rem solid gainsboro;
  display: flex;
  justify-content: space-between;
  padding: 3rem;
`

export const HeaderLink = styled(Link)`
  margin: 0 1rem;
`

export const HeaderSection = styled.div``
