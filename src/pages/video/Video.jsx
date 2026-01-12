import React from 'react'
import './video.css'
import Recommended from '../../Components/Recommended/Recommended'
import PlayVideo from '../../Components/PlayVideo/PlayVideo'
const Video = () => {
  return (
    <div className='play-container'>
       <PlayVideo/>
       <Recommended/>
      
    </div>
  )
}

export default Video
