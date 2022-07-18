import { useState, useEffect } from 'react';

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => setData(result))
      .finally(setIsFetching(false))
      .catch((err) => console.log(err));
  }, []);

  return { data, isFetching };
}
