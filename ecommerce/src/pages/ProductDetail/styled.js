import styled from 'styled-components'
import theme from './../../common/theme'

export const ProductWrap = styled.div`
  background-color: ${theme.color.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
  padding: 0 2rem;
  padding-bottom: 2rem;
`

export const ImgWrap = styled.div`
  height: 16rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Img = styled.img`
  max-height: 15rem;
  max-width: 100%;
`

export const Price = styled.div`
  color: ${theme.color.red};
  font-size: 1.8rem;
  margin-top: 2rem;
`

export const Description = styled.p`
  text-align: justify;
  max-width: 500px;
`

export const AddButton = styled.button`
  background: ${theme.color.red};
  padding: 1rem;
  margin-top: 0.5rem;
  border: none;
  border-radius: ${theme.radius.basic};
  color: ${theme.color.white};
  cursor: pointer;
`
