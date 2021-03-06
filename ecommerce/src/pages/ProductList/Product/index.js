import React from 'react'

import { Wrapper, ImgWrap, Img, TitleWrap, Title, Price, Link } from './styled'
import Button from './../../../components/Button'
import * as routes from '../../../routes'

const Product = ({ node, onAddToCart }) => (
  <Wrapper>
    <Link to={routes.getProductDetailRoute(node.id)}>
      <ImgWrap>
        <Img src={node.image_url} alt={`${node.name} image`} />
      </ImgWrap>
      <TitleWrap>
        <Title>{node.name}</Title>
      </TitleWrap>
      <Price>{node.price.formatted_amount}</Price>
      <Button
        onClick={(evt) => {
          evt.preventDefault()
          onAddToCart(node.id)
        }}
      >
        Add to Card
      </Button>
    </Link>
  </Wrapper>
)

export default Product
