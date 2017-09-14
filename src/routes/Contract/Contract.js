import React from 'react'
import { Row, Col } from 'antd'
import Address from './Address.js'
import './Contract.less'

class Contract extends React.Component {
  render () {
    return (
      <div>
        <div className='contract-info'>
          <div className='department-wrapper'>
            <h1 className='department-name'>设计部门</h1>
            <Row>
              <Col span={12}>咨询热线：130 2685 9632</Col>
              <Col span={12}>联系人：闫主管</Col>
            </Row>
            <Row>
              <Col span={12}>传真号码：010-63323699</Col>
              <Col span={12}>电子邮箱：302538443@qq.com</Col>
            </Row>
          </div>
          <div className='department-wrapper'>
            <h1 className='department-name'>市场部门</h1>
            <Row>
              <Col span={12}>咨询热线：130 2685 9632</Col>
              <Col span={12}>联系人：韩经理</Col>
            </Row>
            <Row>
              <Col span={12}>传真号码：010-63323699</Col>
              <Col span={12}>电子邮箱：302538443@qq.com</Col>
            </Row>
          </div>
        </div>
        <Address />
      </div>
    )
  }
}

export default Contract
