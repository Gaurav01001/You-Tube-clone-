import { useEffect, useState } from 'react'
import './PlayVideo.css'

import video from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import { API_key } from '../../Data'
const PlayVideo = ({videoId}) => {

    const [apidata , setApidata] = useState(null)

    // make a function to fetch the description and all
    const fetchVideoData = async()=>{
        //fetch video data
        const video_detail_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_key}`;
        await fetch(video_detail_url).
        then(response=> response.json())
        .then(data=>setApidata(data.items[0]))
    }
useEffect(()=>{
fetchVideoData();
},[videoId])
  return (
    <div className='play-video'>
        {/* <video src={video} controls autoPlay muted></video> */}
        <iframe
  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
  frameBorder="0"
  allow="autoplay; encrypted-media"
  allowFullScreen
></iframe>



        <h3>{apidata?apidata.snippet?.title:"Title Here"}</h3>
        <div className="play-video-info">
            <p>15555 views &bull; 2days ago</p>
            <div>
                <span><img src={like} alt="" /> 125 </span>
                <span><img src={dislike} alt="" /> 22 </span>
                <span><img src={share} alt="" /> Share </span>
                <span><img src={save} alt="" /> Save </span>
            </div>
        </div>

        <hr />
        <div className="publisher">
            <img src={jack} alt="" />
            <div>
                <p>Gauravcode</p>
                <span>1 subscriber</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className='video-description'>
            <p>This is a sample video about idk</p>
            <hr />
            <h4>1 comments</h4>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Gaurav 
                        <span> 1 day ago 2026</span>
                    </h3>
                    <p>Hope you find a job soon , you wont get a job with this shit</p>
                    <div className="comment-actions">
                        
                        <img src={like} alt="" />
                        <span>1</span>
                        <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
        </div>

    </div>
  )
}

export default PlayVideo
