import React from 'react'
import ReactDOM from 'react-dom'
import store from './store/createStore'
import AppContainer from './containers/AppContainer'
import 'normalize.css/normalize.css'
import './static/style/core.less'
import './index.css'

ReactDOM.render(
  <AppContainer store={store} />,
  document.getElementById('root')
)
