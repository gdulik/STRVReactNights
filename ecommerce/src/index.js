import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const render = () =>
  // eslint-disable-next-line react/no-render-return-value
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root'),
  )

render()

if (module.hot) {
  module.hot.accept('./App', () => render())
}
