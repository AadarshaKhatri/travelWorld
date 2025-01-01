import { useEffect, useState } from "react";
import { getData, postData } from "../Service/GetService";

export const GetFetchData = (url: string) => {
  const [data, setData] = useState<object | null>([]);
  const [error, setError] = useState<string | null>(null); 
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => { 
      setLoading(true);

      try {
        const response = await getData(url); 
        setData(response.data);
      } catch (err) {
        setError("Failed to fetch data!");  
        console.error(err); 
      } finally {
        setLoading(false);  
      }
    };

    fetchData(); 
  }, [url]); 

  return { data, error, loading }; 
};


export const PostFetchData = (url: string, payloadData:object) => {
  const [data, setData] = useState<object | null>([]);
  const [error, setError] = useState<string | null>(null); 
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => { 
      setLoading(true);

      try {
        const response = await postData(url,payloadData); 
        setData(response.data);
      } catch (err) {
        setError("Failed to fetch data!");  
        console.error(err); 
      } finally {
        setLoading(false);  
      }
    };

    fetchData(); 
  }, [url,payloadData]); 

  return { data, error, loading }; 
};