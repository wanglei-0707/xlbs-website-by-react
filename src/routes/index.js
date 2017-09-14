import React from 'react'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'
import Home from './Home/index.js'
import About from './About/index.js'
import Case from './Case/index.js'
import Contract from './Contract/index.js'
import Navbar from '../components/Navbar/index.js'
import LogoImg from '../static/assets/logo.png'
import './index.less'

const Routes = () => (
  <div style={{ height: '100%' }}>
    <Route path='/' component={Home} exact />
    <div className='tab-page'>
      <header>
        <Link to='/'>
          <img
            src={LogoImg}
            alt='logo'
            className='logo'
          />
        </Link>
        <Navbar className='nav' />
      </header>
      <div className='tab-page-content'>
        <Route path='/about' component={About} />
        <Route path='/case' component={Case} />
        <Route path='/contract' component={Contract} />
      </div>
      <footer>
        <p>©2016 北京鑫联必升文化发展有限公司-京ICP备16051925号-1版权所有</p>
      </footer>
    </div>
  </div>
)

export default Routes
