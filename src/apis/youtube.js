import axios from 'axios';

const KEY = "AIzaSyC05dsmZMA_iNlxnR99x1dMqb-sOALYxVE";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video'
    }
});

