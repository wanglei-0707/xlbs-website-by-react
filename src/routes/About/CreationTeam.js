import React from 'react'
import { Carousel } from 'antd'
import './CreationTeam.less'

const teamData = [
  {
    name: '王新1',
    department: '品牌设计',
    position: '设计总监',
    description: `1889年出生于法国巴黎是美国工业设计的重要奠基人之一，一生从事工业产品设计、
    包装设计及平面设计（特别是VI），参与项目多达数千个，设计领域极为广泛，代表了第一代美国工业设计师涉猎的广泛。
    他把设计高度专业化和商业化，使他的设计公司成为20世纪世界上最大的设计公司之一。罗维不仅对工业技术深感兴趣，
    对于人的视觉敏感性也有很深的认识和追求，设计既具工业化的特征，又不乏人性化。他一生有无数荣誉，
    他是第一位被《时代》周刊作为封面人物的设计师.`
  },
  {
    name: '王新2',
    department: '品牌设计',
    position: '设计总监',
    description: `1889年出生于法国巴黎是美国工业设计的重要奠基人之一，一生从事工业产品设计、
    包装设计及平面设计（特别是VI），参与项目多达数千个，设计领域极为广泛，代表了第一代美国工业设计师涉猎的广泛。
    他把设计高度专业化和商业化，使他的设计公司成为20世纪世界上最大的设计公司之一。罗维不仅对工业技术深感兴趣，
    对于人的视觉敏感性也有很深的认识和追求，设计既具工业化的特征，又不乏人性化。他一生有无数荣誉，
    他是第一位被《时代》周刊作为封面人物的设计师.`
  },
  {
    name: '王新3',
    department: '品牌设计',
    position: '设计总监',
    description: `1889年出生于法国巴黎是美国工业设计的重要奠基人之一，一生从事工业产品设计、
    包装设计及平面设计（特别是VI），参与项目多达数千个，设计领域极为广泛，代表了第一代美国工业设计师涉猎的广泛。
    他把设计高度专业化和商业化，使他的设计公司成为20世纪世界上最大的设计公司之一。罗维不仅对工业技术深感兴趣，
    对于人的视觉敏感性也有很深的认识和追求，设计既具工业化的特征，又不乏人性化。他一生有无数荣誉，
    他是第一位被《时代》周刊作为封面人物的设计师.`
  },
  {
    name: '王新4',
    department: '品牌设计',
    position: '设计总监',
    description: `1889年出生于法国巴黎是美国工业设计的重要奠基人之一，一生从事工业产品设计、
    包装设计及平面设计（特别是VI），参与项目多达数千个，设计领域极为广泛，代表了第一代美国工业设计师涉猎的广泛。
    他把设计高度专业化和商业化，使他的设计公司成为20世纪世界上最大的设计公司之一。罗维不仅对工业技术深感兴趣，
    对于人的视觉敏感性也有很深的认识和追求，设计既具工业化的特征，又不乏人性化。他一生有无数荣誉，
    他是第一位被《时代》周刊作为封面人物的设计师.`
  },
  {
    name: '王新5',
    department: '品牌设计',
    position: '设计总监',
    description: `1889年出生于法国巴黎是美国工业设计的重要奠基人之一，一生从事工业产品设计、
    包装设计及平面设计（特别是VI），参与项目多达数千个，设计领域极为广泛，代表了第一代美国工业设计师涉猎的广泛。
    他把设计高度专业化和商业化，使他的设计公司成为20世纪世界上最大的设计公司之一。罗维不仅对工业技术深感兴趣，
    对于人的视觉敏感性也有很深的认识和追求，设计既具工业化的特征，又不乏人性化。他一生有无数荣誉，
    他是第一位被《时代》周刊作为封面人物的设计师.`
  },
  {
    name: '王新6',
    department: '品牌设计',
    position: '设计总监',
    description: `1889年出生于法国巴黎是美国工业设计的重要奠基人之一，一生从事工业产品设计、
    包装设计及平面设计（特别是VI），参与项目多达数千个，设计领域极为广泛，代表了第一代美国工业设计师涉猎的广泛。
    他把设计高度专业化和商业化，使他的设计公司成为20世纪世界上最大的设计公司之一。罗维不仅对工业技术深感兴趣，
    对于人的视觉敏感性也有很深的认识和追求，设计既具工业化的特征，又不乏人性化。他一生有无数荣誉，
    他是第一位被《时代》周刊作为封面人物的设计师.`
  }
]
const TEAM_NUM_PER_PAGE = 4

class CreationTeam extends React.Component {
  constructor (props) {
    super(props)
    this._teams = this.getCarouselChildrenNodes()
  }

  getCarouselChildrenNodes () {
    const dataLength = teamData.length
    let divNodes = []
    for (let i = 0; i < Math.ceil(dataLength / 4); i++) {
      let nodes = []
      for (let j = 0; j < TEAM_NUM_PER_PAGE; j++) {
        const cur = i * TEAM_NUM_PER_PAGE + j
        if (cur === dataLength) {
          break
        }
        const curData = teamData[cur]
        nodes.push(
          <div
            className='person'
            key={`${i}-${j}`}
          >
            <div className='person-photo' />
            <div className='person-introduction'>
              <h1 className='person-name'>{curData.name} / {curData.department}</h1>
              <h2 className='person-position'>{curData.position}</h2>
              <p className='person-description'>{curData.description}</p>
            </div>
          </div>
        )
      }
      divNodes.push(
        <div key={i}>
          {nodes}
        </div>
      )
    }
    return divNodes
  }

  render () {
    return (
      <div className='creation-team'>
        <h1 className='team-title'>创作团队</h1>
        <h2 className='team-title-in-English'>our teams</h2>
        <Carousel>
          {this._teams}
        </Carousel>
      </div>
    )
  }
}

export default CreationTeam
