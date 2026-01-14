import React, { useEffect, useState } from 'react'
import './Feed.css'
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'
import { Link } from 'react-router-dom'
import {API_key} from '../../Data.js'
const Feed = (category) => {
  const [data, setData] = useState([])
  const fetchData = async()=>{
    const vid_listURL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_key}`
    await fetch(vid_listURL).then(response=> response.json()).then(data=>setData(data.items))
  
  }

  useEffect(()=>{
    fetchData();
  },[category])

  return (
    <div className="feed">
      {data.map((item, index)=>{
        return(
          <Link to={`video/${item.snippet.categoryID}/${item.id}`} className='card'>
            <img src={thumbnail1} alt="" /> 
            <h2>Best Channel to learn coding</h2> 
            <h3>great coder</h3>
            <p>15K views &bull; 2days ago</p>
          </Link>
        )
      })}
    </div>
  )
}

export default Feed




