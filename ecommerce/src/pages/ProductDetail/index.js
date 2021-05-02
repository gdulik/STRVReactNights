import React, { Component } from 'react'
import { connect } from 'react-redux'

import Layout from '../../components/Layout'
import Loader from '../../components/Loader'
import Button from '../../components/Button'
import { H1, H3 } from '../../components/Typography'
import { ProductWrap, ImgWrap, Img, Description, Price } from './styled'

import { getProducts } from './../../api/get-products'
import { addProduct } from './../../store/cartItems/actions'
import { loadProducts } from './../../store/products/actions'

class ProductView extends Component {
  state = {
    isLoading: true,
  }

  async componentDidMount() {
    if (!this.props.product) {
      const products = await getProducts()
      this.props.loadProducts(products)
    }
    this.setState({ isLoading: false })
  }

  handleAddToCart = (productId, evt) => {
    evt.preventDefault()
    this.props.addProduct(productId)
  }

  render() {
    if (!this.props.product) return null
    const { product } = this.props
    return (
      <Layout>
        <H1 textAlign="center">Product detail</H1>
        {this.state.isLoading && <Loader />}
        <ProductWrap>
          <H3>{product.name}</H3>
          <ImgWrap>
            <Img src={product.image_url} alt={`${product.name} image`} />
          </ImgWrap>
          <Price>{product.price.formatted_amount}</Price>
          <Description>{product.description}</Description>
          <Button onClick={(evt) => this.handleAddToCart(product.id, evt)}>
            Add to Cart
          </Button>
        </ProductWrap>
      </Layout>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  product: state.products.filter(
    (product) => product.id === ownProps.match.params.productId
  )[0],
})

const mapDispatchToProps = {
  addProduct,
  loadProducts,
}

const ProductDetail = connect(mapStateToProps, mapDispatchToProps)(ProductView)

export { ProductDetail }
