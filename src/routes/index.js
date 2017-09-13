import React from 'react'
import { Route } from 'react-router'
import Home from './Home/index.js'
import About from './About/index.js'

const Routes = () => (
  <div style={{ height: '100%' }}>
    <Route path='/' component={Home} exact />
    <Route path='/about' component={About} />
  </div>
)

export default Routes
