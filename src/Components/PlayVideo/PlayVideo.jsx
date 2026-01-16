import {  useEffect, useState } from 'react'
import './PlayVideo.css'

import video from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import { API_key, value_converter } from '../../Data'
import moment from 'moment'
const PlayVideo = ({videoId}) => {

    const [apidata , setApidata] = useState(null)
    const [show, setshow ] = useState(false);
    const [commentData, setCommentData]= useState([])
    const [channelData, setChannelData]= useState(null);
    // make a function to fetch the description and all
    const fetchVideoData = async()=>{
        //fetch video data
        const video_detail_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_key}`;
        await fetch(video_detail_url).
        then(response=> response.json())
        .then(data=>setApidata(data.items[0]))
    }
    const fetchChannelData = async()=>{
      //fetch channel data
    const channelData_url =`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apidata.snippet.channelId}&key=${API_key}`;
    await fetch(channelData_url).
    then(response=> response.json())
    .then(data=>setChannelData(data.items[0]))
    
    }
  const fetchCommentData = async () => {
  const commentData_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=20&videoId=${videoId}&key=${API_key}`
  const res = await fetch(commentData_url)
  const data = await res.json()
  setCommentData(data.items)
}
            // to run this function use useeffect
useEffect(() => {
  const loadData = async () => {
    await fetchVideoData()
    await fetchCommentData()
  }
  loadData()
}, [videoId])


useEffect(() => {
  if (apidata) fetchChannelData()
}, [apidata])


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
            <p>{apidata?value_converter(apidata.statistics.viewCount):"16k"} Views &bull; {apidata?moment(apidata.snippet.publishedAt).fromNow():"2 days ago"}</p>
            <div>
                <span><img src={like} alt="" /> {apidata?value_converter(apidata.statistics.likeCount):155} </span>
                <span><img src={dislike} alt="" /> </span>
                <span><img src={share} alt="" /> Share </span>
                <span><img src={save} alt="" /> Save </span>
            </div>
        </div>

        <hr />
        <div className="publisher">
            <img
  src={channelData ? channelData.snippet.thumbnails.default.url : null}
  alt=""
/>

            <div>
                <p>{apidata?apidata.snippet?.channelTitle:""}</p>
                <span>{channelData?value_converter(channelData.statistics.subscriberCount):0} Subscribers</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className='video-description'>
            <p className={show ? "full-desc" : "short-desc"} >{apidata?apidata.snippet.description:"No Description"}</p>
            {apidata && apidata.snippet.description.length > 200 && (
                <span
                className="read-more"
                onClick={()=>setshow(!show)}
                >
                    {show ? "Show Less": "Read more"}
                </span>
            )}
            <hr />
            <h4>{apidata?value_converter(apidata.statistics.commentCount):0} Comments</h4>
            {commentData.map((item, index)=>{
                return (
                    <div key = {index} className="comment">
             <img 
  src={item.snippet.topLevelComment.snippet.authorProfileImageUrl || user_profile} 
  onError={(e) => e.target.src = user_profile}
/>

                <div>
                    <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} 
                        <span>{moment(item.snippet.publishedAt).fromNow() }</span>
                    </h3>
                    <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                    <div className="comment-actions">
                        
                        <img src={like} alt="" />
                        <span> {value_converter(item.snippet.topLevelComment.snippet.likeCount)} </span>
                        <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                )
            })}
            
        </div>

    </div>
  )
}

export default PlayVideo
