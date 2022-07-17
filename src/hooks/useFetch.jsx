import axios from 'axios';

import { useState, useEffect } from 'react';

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    axios.get(url)
      .then((response) => {
        setData(response.data);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, []);

  return { data, isFetching };
}
