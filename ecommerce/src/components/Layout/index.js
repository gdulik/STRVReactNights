import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import * as customerActions from '../../store/customer/actions'
import { removeToken } from '../../utils/token'
import { removeCustomer } from '../../utils/customer'
import { Wrapper, Header, HeaderSection, HeaderLink } from './styled'

class Layout extends Component {
  handleLogout = () => {
    this.props.logout()
    removeToken()
    removeCustomer()
    this.props.history.push('/')
  }

  render() {
    const { isAuthenticated } = this.props
    return (
      <Fragment>
        <Header>
          <HeaderSection>
            <HeaderLink to="/">All Products</HeaderLink>
          </HeaderSection>
          <HeaderSection>
            <HeaderLink to="/cart">My Cart</HeaderLink>|
            {isAuthenticated ? (
              <React.Fragment>
                <HeaderLink to="/account">My Account</HeaderLink>|
                <HeaderLink as="button" onClick={this.handleLogout}>
                  Logout
                </HeaderLink>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <HeaderLink to="/login">Log In</HeaderLink>|
                <HeaderLink to="/signup">Sign Up</HeaderLink>
              </React.Fragment>
            )}
          </HeaderSection>
        </Header>
        <Wrapper>{this.props.children}</Wrapper>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: Object.keys(state.customer).length !== 0,
})

const mapDispatchToProps = {
  logout: customerActions.logout,
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Layout))
