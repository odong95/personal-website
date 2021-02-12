import { useState, useEffect } from 'react';

const writeToCache = (url, data) => localStorage.setItem(url, JSON.stringify(data));
const readFromCache = (url) => JSON.parse(localStorage.getItem(url)) || null;

const getFreshData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  writeToCache(url, data);
  return data;
}

const useCachedFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const cachedData = readFromCache(url);
      if (cachedData) {
        setData(cachedData)
      } else {
        const projects = await getFreshData(url);
        setData(projects)
      }
    })()
  }, [url])

  return data;
}

export { useCachedFetch };