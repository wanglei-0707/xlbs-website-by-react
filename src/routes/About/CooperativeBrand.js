import React from 'react'
import './CooperativeBrand.less'

// const BRAND_NUM_PER_PAGE = 5
const TOTAL_BRAND_NUM = 8

class CooperativeBrand extends React.Component {
  constructor (props) {
    super(props)
    this._brands = this.getBrandNodes()
  }

  getBrandNodes () {
    let brandNodes = []
    for (let i = 0; i < TOTAL_BRAND_NUM; i++) {
      brandNodes.push(
        <div className='brand-wrapper'>
          <img
            src={require(`../../static/assets/brand${i + 1}.png`)}
            alt={`BrandImg${i + 1}`}
          />
        </div>
      )
    }
    return brandNodes
  }

  render () {
    return (
      <div className='cooperative-brand'>
        <h1 className='brand-title'>合作品牌</h1>
        <h2 className='brand-title-in-English'>PARTNER</h2>
        <div className='brand-group'>
          {this._brands}
        </div>
      </div>
    )
  }
}

export default CooperativeBrand
