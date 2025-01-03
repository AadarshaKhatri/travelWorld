import Pagination from "../components/Pagination/Pagination";
import SearchBar from "../components/SearchBar/SearchBar";
import TourCard from "../components/TourCard/TourCard";
import { useEffect, useState } from "react";
import { getData } from "../Service/GetService";

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
  data: DataProps[];
}

const Tours = () => {
  const [data, setData] = useState<DataProps[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "tours/search/getFeaturedTour";
        const res: ApiResponse = await getData(url);
        console.log(res);
        setData(res.data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <section>
      <div>
        {/* UpperSection */}
        <div className="relative flex flex-row justify-center items-center pb-20">
          <img
            src="/assets/tour-img01.jpg"
            className="w-full max-h-[300px] object-fill"
          ></img>
          <h2 className="text-8xl text-white absolute font-bold top-10">
            Tours
          </h2>
        </div>

        {/* Search Bar */}

        <div className="w-full flex flex-row justify-center">
          <SearchBar />
        </div>

        {/* Featured Tours Card */}
        <div>
          <h2 className="font-semibold text-2xl ml-14">--FEATURED TOURS--</h2>

          <div className="flex flex-col justify-center items-center md:flex-row md:flex-wrap gap-5 mt-10 pb-20">
            {data?.data.map((currentElement: DataProps) => (
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
            ))}
          </div>
        </div>

        <div></div>
        <Pagination />
      </div>
    </section>
  );
};

export default Tours;
