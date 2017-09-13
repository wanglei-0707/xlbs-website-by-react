import React from 'react'
import { connect } from 'react-redux'
import LogoImg from './assets/logo.png'
import Navbar from '../../components/Navbar/index.js'
import './Home.less'

class Home extends React.Component {
  render () {
    return (
      <div className='container'>
        <Navbar className='index-nav' />
        <div className='content'>
          <img
            src={LogoImg}
            alt='logo img'
            className='logo-img'
          />
          <p className='description-in-English'>creativity is everywhere</p>
          <p className='description'>创意无处不在</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps)(Home)
