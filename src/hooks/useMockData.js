import { useState, useEffect } from 'react';

import mockDataNews from '../data/news.json';
import mockDataCategories from '../data/categories.json';
import mockDataMakes from '../data/makes.json';

const useMockData = (collection) => {
  const [news, setNews] = useState([]);
  const [categories, setCategories] = useState([]);
  const [makes, setMakes] = useState([]);

  useEffect(() => {
    switch(collection) {
      case 'news': 
        setNews(mockDataNews);
        break;
      case 'categories': 
        setCategories(mockDataCategories);
        break;
      case 'makes': 
        setMakes(mockDataMakes);
        break;
      default:
        // do nothing
    }
  }, [collection]);

  return { news, categories, makes };
}

export default useMockData;