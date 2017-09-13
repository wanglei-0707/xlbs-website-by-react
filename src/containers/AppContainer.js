import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Router } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import { Provider } from 'react-redux'
import routes from '../routes/index.js'

const history = createBrowserHistory()
const contentStyle = {
  height: '100%'
}

class AppContainer extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    const { store } = this.props
    return (
      <Provider store={store}>
        <div style={contentStyle}>
          <Router history={history} children={routes()} />
        </div>
      </Provider>
    )
  }
}

export default AppContainer
