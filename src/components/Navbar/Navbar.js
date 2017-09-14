import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'antd'
import { Link } from 'react-router-dom'
import './Navbar.less'

const iconStyle = {
  display: 'block',
  width: 55,
  height: 40,
  fontSize: 40,
  background: '#fff',
  color: '#a9a6a6',
  borderRadius: 8,
  border: '1px solid #ccc',
  boxShadow: '2px 2px 1px #9a9696'
}

class Navbar extends React.Component {
  static propTypes = {
    className: PropTypes.string
  }

  constructor (props) {
    super(props)
    this.state = {
      ifShowNav: false
    }
  }

  handleMouseEnter = (e) => {
    this.setState({
      ifShowNav: true
    })
  }

  handleMouseLeave = (e) => {
    this.setState({
      ifShowNav: false
    })
  }

  render () {
    const { ifShowNav } = this.state
    return (
      <div className={this.props.className}>
        { ifShowNav
          ? <nav
            className='nav-bar'
            onMouseLeave={this.handleMouseLeave}
          >
            <ul>
              <li>
                <Link to='/about'>关于我们</Link>
                <span className='ant-divider' />
                <Icon type='home' />
              </li>
              <li>
                <Link to='/case'>服务案例</Link>
                <span className='ant-divider' />
                <Icon type='appstore-o' />
              </li>
              <li>
                <Link to='/contract'>联系我们</Link>
                <span className='ant-divider' />
                <Icon type='phone' />
              </li>
              <li>
                <Link to='/about'>开始合作</Link>
                <span className='ant-divider' />
                <Icon type='shopping-cart' />
              </li>
            </ul>
          </nav>
          : <Icon
            type='bars'
            style={iconStyle}
            onMouseEnter={this.handleMouseEnter}
          />
        }
      </div>
    )
  }
}

export default Navbar
