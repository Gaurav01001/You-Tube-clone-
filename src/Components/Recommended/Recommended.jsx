import React from 'react'
import './Recommended.css'
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'

const videos = [
  { img: thumbnail1, title: 'Learn HTML & CSS Fast', channel: 'Gauravcode', views: '120k views' },
  { img: thumbnail2, title: 'JavaScript Crash Course', channel: 'CodeMaster', views: '340k views' },
  { img: thumbnail3, title: 'React in 1 Hour', channel: 'DevStack', views: '210k views' },
  { img: thumbnail4, title: 'Flexbox Explained', channel: 'WebSimplify', views: '98k views' },
  { img: thumbnail5, title: 'CSS Grid Mastery', channel: 'FrontendPro', views: '175k views' },
  { img: thumbnail6, title: 'Node.js Basics', channel: 'BackendHub', views: '260k views' },
  { img: thumbnail7, title: 'Build YouTube Clone', channel: 'Gauravcode', views: '410k views' },
  { img: thumbnail8, title: 'Top VS Code Extensions', channel: 'CodeTips', views: '89k views' }
]
const Recommended = () => {
  return (
    <div className="recommended">
      {videos.map((video, index) => (
        <div className="side-video-list" key={index}>
          <img src={video.img} alt="" />
          <div className="vid-info">
            <h4>{video.title}</h4>
            <p>{video.channel}</p>
            <p>{video.views}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Recommended
