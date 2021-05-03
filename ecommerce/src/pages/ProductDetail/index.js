import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Layout from '../../components/Layout'
import Loader from '../../components/Loader'
import Button from '../../components/Button'
import { H1 } from '../../components/Typography'
import { getProductById } from './../../api/get-product'
import { addProduct } from './../../store/cart/actions'
import { loadProduct } from './../../store/products/actions'

import {
  Wrapper,
  ImgWrapper,
  Img,
  DetailsWrapper,
  Description,
  Price,
} from './styled'

class ProductView extends Component {
  fetchProduct = async (productId) => {
    const product = await getProductById(productId)
    this.props.loadProduct(product)
  }

  componentDidMount() {
    const { productId } = this.props.match.params
    this.fetchProduct(productId)
  }

  componentDidUpdate(prevProps) {
    const { productId } = this.props.match.params
    if (prevProps.match.params.productId !== productId) {
      this.fetchProduct(productId)
    }
  }

  render() {
    if (!this.props.product) return null
    const { product } = this.props
    return (
      <Layout>
        <Wrapper>
          {product ? (
            <React.Fragment>
              <ImgWrapper>
                <Img src={product.image_url} />
              </ImgWrapper>
              <DetailsWrapper>
                <H1 textAlign="center">{product.name}</H1>
                <Price>{product.price.formatted_amount}</Price>
                <Description>{product.description}</Description>
                <Button onClick={() => this.props.addProduct(product.id)}>
                  Add to Cart
                </Button>
                <Link to="/">Back</Link>
              </DetailsWrapper>
            </React.Fragment>
          ) : (
            <Loader />
          )}
        </Wrapper>
      </Layout>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  product: state.products.find((p) => p.id === ownProps.match.params.productId),
})

const mapDispatchToProps = {
  addProduct,
  loadProduct,
}

const ProductDetail = connect(mapStateToProps, mapDispatchToProps)(ProductView)

export { ProductDetail }
