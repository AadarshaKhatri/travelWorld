import { useEffect, useState } from "react";
import { getData, postData } from "../Service/GetService";

interface DataProps {
  
_id:number;
title:string,
city:string,
address:string,
distance:number,
price:number,
maxGroupSize:number,
desc:string,
reviews:Array<string>
photo:string,
featured:boolean,
}

interface PayloadProps{
  address:string,
  distance:number,
  maxGroupSize:number,
}

export const GetFetchData = (url: string) => {
  const [data, setData] = useState<DataProps[] | null>();
  const [error, setError] = useState<unknown | null>(null); 
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => { 
      setLoading(true);

      try {
        const response = await getData(url); 
        setData(response.data);
      } catch (error) {
        setError("Failed to fetch the data");
        setError(error);
      } finally {
        setLoading(false);  
      }
    };
    fetchData(); 
  }, [url]); 

  
  return { data,loading,error }; 
};


export const PostFetchData = (url: string, payloadData:PayloadProps) => {
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

  console.log(error);
  console.log(loading);
  return {data}; 
};