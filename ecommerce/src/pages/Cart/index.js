import React, { Component } from 'react'
import { connect } from 'react-redux'

import Layout from '../../components/Layout'
import Button from '../../components/Button'
import { H1 } from '../../components/Typography'

import { CartWrapper, ItemWrapper, Item } from './styled'
import { removeProduct } from '../../store/cart/actions'

class CartView extends Component {
  handleRemoveFromCart = (productId) => {
    this.props.removeProduct(productId)
  }

  render() {
    return (
      <Layout>
        <H1>Your cart</H1>
        <CartWrapper>
          {this.props.items.map((item) => (
            <ItemWrapper key={item.product.id}>
              <Item>
                {item.product.name} - {item.quantity}
              </Item>
              <Button
                onClick={() => this.handleRemoveFromCart(item.product.id)}
              >
                Remove from Cart
              </Button>
            </ItemWrapper>
          ))}
        </CartWrapper>
      </Layout>
    )
  }
}

const mapStateToProps = (state) => ({
  items: Object.keys(state.cart).map((productId) => ({
    quantity: state.cart[productId],
    product: state.products.find((p) => p.id === productId),
  })),
})

const mapDispatchToProps = {
  removeProduct,
}

const Cart = connect(mapStateToProps, mapDispatchToProps)(CartView)
export { Cart }
