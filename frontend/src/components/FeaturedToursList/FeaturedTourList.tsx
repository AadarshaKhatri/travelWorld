import TourCard from "../TourCard/TourCard"
import { useEffect,useState } from "react"
import { getData } from "../../Service/GetService"

  interface Reviews{
    _id: string;
    username: string;
    reviewText: string;
    ratings: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }

interface DataProps{
  _id:number
  title:string,
  city:string,
  address:string,
  distance:number,
  price:number,
  maxGroupSize:number,
  desc: string,
  reviews:Reviews[],
  photo: string,
  featured:boolean,
}

interface ApiResponse{
  success:boolean,
  message:string,
  data:DataProps[];
}

const FeaturedTourList = () => {

  
  const [data,setData] = useState<ApiResponse>();

    
  useEffect(()=>{
    const fetchData = async()=>{
    try{
      const url = "/tours";
      const res = await getData(url);
      console.log(res);
      setData(res.data);

      console.log(res.data);
    }catch(err){
      console.log("Failed to Fetch the data!",err);
    }
  }
  fetchData();
  },[])

  return (
   <section>
    <div>
      <div className="flex flex-col">
        <h3 className="text-lg text-red-400 text-center">TRENDY</h3>
        <h2 className="text-blue-950 text-4xl font-bold text-center mt-5">Our Trending Tour</h2>
        <h2 className="text-blue-950 text-4xl font-bold text-center mt-5" >Packages</h2>
      </div>

      <div className="flex flex-col justify-center items-center md:flex-row md:flex-wrap gap-5 mt-10">
        {
          data?.data?.map((currentElement :DataProps)=>(
            
            <TourCard
            key={currentElement._id}
            id={currentElement._id}
            title={currentElement.title}
            description={currentElement.desc}
            city={currentElement.city}
            address={currentElement.address}
            distance={currentElement.distance}
            price={currentElement.price}
            groupSize={currentElement.maxGroupSize}
            reviews={currentElement.reviews}
            photo={currentElement.photo}
            featured={currentElement.featured}
            />
          ))
        }

      </div>

      
    </div>
    </section>
  )
}

export default FeaturedTourList