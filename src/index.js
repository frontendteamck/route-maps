import React from 'react'
import ReactDOM from 'react-dom'
import Root from './App.js'
import { AppContainer } from 'react-hot-loader'
import './scss/style.scss'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <AppContainer>
    <BrowserRouter>
      <Root />
    </BrowserRouter>

  </AppContainer>, document.getElementById('react-app'))

if (module.hot) {
  module.hot.accept('./App.js', () => {
    const NewRoot = require('./App.js').default
    ReactDOM.render(
      <AppContainer>
        <BrowserRouter>
          <NewRoot />
        </BrowserRouter>
      </AppContainer>, document.getElementById('react-app'))
  })
}
