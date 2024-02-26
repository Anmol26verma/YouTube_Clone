// eslint-disable-next-line no-unused-vars
import React, { useEffect, useCallback, useState } from 'react'; 
import './Feed.css'; 

import { Link } from 'react-router-dom';
import API_KEY, { value_converter } from '../../data.js';
import moment from 'moment';  // For Converting the time into a readable format
import PropTypes from 'prop-types';



const Feed = ({category  }) => {

    const [data, setData] = useState([]);

    const fetchData = useCallback(async () => {
        const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=100&regionCode=IN&videoCategoryId=${category}&key=${API_KEY}`;
        await fetch(videoList_url).then(responce => responce.json()).then(data => setData(data.items))
    }, [category, setData]);
    
    useEffect(() => {
        fetchData();
    }, [category, fetchData]); 

  return (
    <div className='feed'>

        {data.map((item, index) => {
            return (
                <Link key={index} to={`video/${item.snippet.categoryId}/${item.id}`} className='card'>
                <img src={item.snippet.thumbnails.high.url} alt="" />
                <h2>{item.snippet.title}</h2>  {/*Description for video*/}
                <h3>{item.snippet.channelTitle}</h3>  {/*Channel name*/}
                <p>{value_converter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>  {/*Views and time of upload*/}
                </Link>
            )
        })}    
    </div>
  )
}

Feed.propTypes = {
    category: PropTypes.string.isRequired,
  };

export default Feed
