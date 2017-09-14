import React from 'react'
import { Tabs } from 'antd'
import './Case.less'

const TabPane = Tabs.TabPane

class Case extends React.Component {
  handleChange = (e) => {
    console.log('handleChange')
  }

  render () {
    return (
      <Tabs defaultActiveKey='brand' onChange={this.handleChange}>
        <TabPane tab='品牌策划' key='brand'>品牌策划</TabPane>
        <TabPane tab='创意设计' key='creativity'>创意设计</TabPane>
        <TabPane tab='LOGO设计' key='logo'>LOGO设计</TabPane>
        <TabPane tab='动画设计' key='animation'>动画设计</TabPane>
        <TabPane tab='空间设计' key='space'>空间设计</TabPane>
      </Tabs>
    )
  }
}

export default Case
