import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"
import TourCard from "../components/TourCard/TourCard";

interface Review {
  _id: string;
  username: string;
  reviewText: string;
  ratings: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface DataProps {
  key: number;
  _id: number;
  title: string;
  city: string;
  address: string;
  distance: number;
  desc: string;
  price: number;
  maxGroupSize: number;
  description: string;
  reviews: Review[];
  photo: string;
  featured: boolean;
}

interface ApiResponse {
  success:boolean,
  message:string,
  data: DataProps[];
}
const SearchResultList = () => {

  const [data,setData]=useState<ApiResponse>();
  const location  = useLocation();
  useEffect(() => {
    if (location?.state?.toursData) {
      const toursData = location.state.toursData;
      setData({
        ...toursData,
        data: Array.isArray(toursData.data) ? toursData.data : [toursData.data],
      });
    } else {
      console.error("No tours data found in location.state");
    }
  }, [location]);
  return (
  <section className="pb-20">


    {/* When input exactly matches the model data */}
    {
      data?.data.length === 1 ? 

    <div className="flex flex-col mx-10 gap-y-5">
      <div>
          <h2 className="text-4xl text-blue-950">Your search for "address over here"</h2>
          <hr className="mb-2 mt-2  border-gray-500"></hr>

          <div className="mt-3">
            <h5 className="text-sm text-gray-500">Results for <span className="font-semibold">"{location.state.address.trim()}"</span></h5>
          </div>
         

      </div>
      <div className="flex flex-wrap flex-row justify-start gap-8">
        {
          data?.data.map((currentElement : DataProps)=>(
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


      <div className="w-full flex justify-center">
        <Link to = "/"><button className="bg-primary px-4 py-3 rounded-md text-white cursor-pointer">Go back to Home</button></Link>

      </div>

    </div> 
    : 
    <div className="flex flex-col mx-10 gap-y-5">
      <div>
          <h2 className="text-4xl text-blue-950">Your search for "address over here"</h2>
          <hr className="mb-2 mt-2  border-gray-500"></hr>

          <div className="mt-3">
            <h5 className="text-sm text-gray-500">No Results Found for <span className="font-semibold">"{location.state.address.trim()}"</span></h5>
          </div>
         

      </div>
      <div className="mt-2">
          <h3 className="text-lg font-semibold text-blue-950">--- All Tours ---</h3>

         </div>
      <div className="flex flex-wrap flex-row justify-start gap-8">
        {
          data?.data.map((currentElement : DataProps)=>(
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


      <div className="w-full flex justify-center mt-6">
        <Link to = "/"><button className="bg-primary px-4 py-3 rounded-md text-white cursor-pointer">Go back to Home</button></Link>

      </div>

    </div>

    }




    {/* When input doesn't match the model data */}

    
  </section>
  )
}

export default SearchResultList