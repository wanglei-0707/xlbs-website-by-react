import React from 'react'
import { connect } from 'react-redux'
import CreationTeam from './CreationTeam.js'
import CooperativeBrand from './CooperativeBrand.js'

class About extends React.Component {
  render () {
    return (
      <div>
        <section>
          <p>
            TQ（北京商之讯软件有限公司，www.tq.cn）公司成立于2002年11月29日，国家授权呼叫中心运营资质（B—2011093）服务商，
            是国内领先的企业通讯云应用与服务提供商，业内最大的现代连锁服务企业通讯解决方案提供商，为国内众多的现代连锁服务企业
            提供一体化信息化解决方案。公司以“改变企业糟糕的客户联络体系，服务于客户的客户”为使命，致力于为企业提供专业的企业通讯
            云解决方案，帮助企业聚焦于业务流程的完善和效率的提升。
          </p>
          <br />
          <p>
            TQ公司成立以来一直致力于企业通讯领域的产品研发和技术创新。2003年发布国内最早的企业即时通讯软件系统帮缔造行业标准；
            首家发布移动平台的在线客服系统的服务商；基于云计算的云呼叫中心的创始者，采取“云+端”模式创造性的解决了企业复杂网络
            环境和通讯环境下的跨地域分支机构的统一管理。
          </p>
        </section>
        <CreationTeam />
        <CooperativeBrand />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps)(About)
