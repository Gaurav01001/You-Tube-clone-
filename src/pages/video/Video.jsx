import React from 'react'
import './video.css'
import Recommended from '../../Components/Recommended/Recommended'
import PlayVideo from '../../Components/PlayVideo/PlayVideo'
import { useParams } from 'react-router-dom'
const Video = () => {
  const {videoId, catagoryId}= useParams();
  return (
    <div className='play-container'>
       <PlayVideo videoId={videoId}/>
       <Recommended catagoryId= {catagoryId}/>
      
    </div>
  )
}

export default Video
