import { useEffect, useState, useCallback } from "react";

const useFetch = (url, method) => {
  const [apiData, setApiData] = useState([]);
  const [errorData, setErrorData] = useState();

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(url, {
        method: method || "GET",
      });

      const data = await response.json();
      setApiData(data);
    } catch (error) {
      setErrorData(error);
    }
  },[ url, method]);

  useEffect( () => {
    fetchData();
  }, [fetchData]);

  
  return {
    data: apiData,
    error: errorData,
  };
};

export default useFetch;
