import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from './store'
import { ThemeProvider } from '@material-ui/core/styles'

import App from './containers/app'

import 'sanitize.css/sanitize.css'
import './index.css'
import theme from './theme'

const target = document.querySelector('#root')


render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div style={{ }}>
          <App />
        </div>
      </ConnectedRouter>
    </Provider>
  </ThemeProvider>,
  target
)
