import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const useVideos = (term) => {
  const [videos, setVideos] = useState([]);

  const search = async (term) => {
    const { data } = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    setVideos(data.items);
  }

  useEffect(() => {
    search(term)
  }, [term]);

  return [videos, search]
};

export default useVideos;