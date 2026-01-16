import React, { useEffect, useState } from 'react'
import './Recommended.css'

import { API_key } from '../../Data'


const Recommended = ({ categoryId }) => {
  const [apidata, setApidata] = useState([]);

  const fetchData = async () => {
    const relatedvideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=US&videoCategoryId=${categoryId}&key=${API_key}`;
    await fetch(relatedvideo_url)
    .then(resp=>resp.json())
    .then(data=>setApidata(data.items))
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="recommended">
      {apidata.map((video, index) => (
        <div key={index} className="side-video-list">
          <img src={video.snippet.thumbnails.medium.url} alt="" />
          <div className="vid-info">
            <h4>{video.snippet.title}</h4>
            <p>{video.snippet.channelTitle}</p>
            <p>{video.statistics.viewCount} views</p>
          </div>
        </div>
      ))}
    </div>
  );
};


export default Recommended
