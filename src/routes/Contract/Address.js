import React from 'react'
import LocationImg from '../../static/assets/location.png'
import './Address.less'

class Address extends React.Component {
  render () {
    return (
      <div className='location'>
        <h1 className='location-title'>地理位置</h1>
        <h2 className='location-title-in-English'>location</h2>
        <img src={LocationImg} alt='location image' className='location-img' />
      </div>
    )
  }
}

export default Address
