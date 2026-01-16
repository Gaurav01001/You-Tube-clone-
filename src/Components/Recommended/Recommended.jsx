import './Recommended.css'
import { API_key, value_converter } from '../../Data'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Recommended = ({ categoryId }) => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const loadVideos = async () => {
      try {
        const url = categoryId
          ? `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=US&videoCategoryId=${categoryId}&maxResults=20&key=${API_key}`
          : `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=US&maxResults=20&key=${API_key}`;

        const response = await fetch(url);
        const data = await response.json();
        setApiData(data.items || []);
      } catch (error) {
        console.error("Recommended fetch error:", error);
      }
    };

    loadVideos();
  }, [categoryId]);

  return (
    <div className="recommended">
      {apiData.map((item) => (
        <Link to={`/video/${item.snippet.categoryId}/${item.id}`}className="side-video-list" key={item.id}>
          <img
            src={item.snippet.thumbnails.medium.url}
            alt={item.snippet.title}
          />
          <div className="vid-info">
            <h4>{item.snippet.title}</h4>
            <p>{item.snippet.channelTitle}</p>
            <p>{value_converter(item.statistics.viewCount)} views</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Recommended;
