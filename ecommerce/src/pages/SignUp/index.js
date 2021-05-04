import React, { Component } from 'react'
import { Formik } from 'formik'

import Layout from '../../components/Layout'
import { H1 } from '../../components/Typography'
import Form, { GlobalFormError } from '../../components/Form'
import Input from '../../components/Input'
import Button from '../../components/Button'
import schema from './schema'

class SignUp extends Component {
  state = {
    hasSignedUp: false,
    globalError: '',
  }

  initialValues = {
    firstName: '',
    email: '',
    password: '',
    passwordConfirm: '',
  }

  handleSubmit = async (values, { setSubmitting }) => {
    try {
      setSubmitting(true)
      // await createCustomer(values)
      this.setState({
        hasSignedUp: true,
      })
    } catch (error) {
      this.setState({
        globalError: error.message,
      })
    }
    setSubmitting(false)
  }

  renderSuccess = () => (
    <Layout>
      <H1 textAlign="center">You've signed up!</H1>
    </Layout>
  )

  render() {
    if (this.state.hasSignedUp) return this.renderSuccess()
    return (
      <Layout>
        <H1>SignUp</H1>
        <Formik
          initialValues={this.initialValues}
          validationSchema={schema}
          onSubmit={this.handleSubmit}
        >
          {({ handleSubmit, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              <Input name="firstName" label="First name" />
              <Input name="email" label="Email address" type="email" />
              <Input name="password" label="Password" type="password" />
              <Input
                name="passwordConfirm"
                label="Password confirmation"
                type="password"
              />
              <Button disabled={isSubmitting}>
                {isSubmitting ? 'Signing up...' : 'Sign Up'}
              </Button>
            </Form>
          )}
        </Formik>
      </Layout>
    )
  }
}

export { SignUp }
