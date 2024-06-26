import { useState, useEffect } from 'react';

import * as firestore from '../firebase/firestore';

const useData = (collection) => {
  const [news, setNews] = useState([]);
  const [categories, setCategories] = useState([]);
  const [makes, setMakes] = useState([]);

  useEffect(() => {
    switch(collection) {
      case 'categories':
        firestore.getDocuments('categories').then((docs) => setCategories(docs.sort((a,b)=>(a.name > b.name) ? 1 : (a.name < b.name) ? -1 : 0)));
        break;
      case 'makes':
        firestore.getDocuments('makes').then((docs) => setMakes(docs.sort((a,b)=>(a.name > b.name) ? 1 : (a.name < b.name) ? -1 : 0)));
        break;
      case 'news': 
        firestore.getDocuments('news').then((docs) => setNews(docs.sort((a,b)=>(new Date(a.date) < new Date(b.date)) ? 1 : (new Date(a.date) > new Date(b.date)) ? -1 : 0)));
        break;
      default:
        // do nothing
    }
  }, [collection]);

  return { news, categories, makes };
}

export default useData;