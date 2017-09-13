import React from 'react'
import { connect } from 'react-redux'

class About extends React.Component {
  render () {
    return (
      <div>
        About
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps)(About)
