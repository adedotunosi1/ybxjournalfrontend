import { useState, useEffect } from "react";

const useFetch = (url) => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
   const abortCont = new AbortController();

   setTimeout(() => {
     fetch(url, { signal: abortCont.signal })
        .then(res => {
          if(!res.ok){
            throw Error('could not fetch data for resource');
          }
          return res.json();
        })
        .then((data) => {
             setData(data);
             setLoading(false);
             setError(null);
        })
        .catch(err => {
          setLoading(false);
          setError(err.message);
        })
        }, 500);

        return () => abortCont.abort();
        
      }, [url]); 

      return { data, loading, error };
}
 
export default useFetch;