
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
  success:boolean,
  count:number,
  message:string,
  data: DataProps[];
}

const Tours = () => {
  const [pageCount, setPageCount] = useState<number>();
  const [currentPage,setCurrentPage] = useState<number>(1);
  const [data, setData] = useState<ApiResponse>();
  
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url =`tours?page=${currentPage}`;
        const res = await getData(url);
        setData(res.data);
        if (!pageCount) {
          const totalPages = Math.ceil(res.data.count / 2);
          setPageCount(totalPages);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [currentPage]);
  console.log(data);

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
        

        {/* Code For pagination */}
        <section className="overflow-x-hidden">
          <div className="w-full mx-10 flex flex-row justify-center pb-10">
    {
      [...Array(pageCount || 0).keys()].map((number) => (
        <span
          key={number}
          className={`px-2 py-1 cursor-pointer mx-1 ${
            currentPage === number+1
              ? "bg-blue-500 text-white rounded"
              : "bg-gray-200"
          }`}
          onClick={() => setCurrentPage(number + 1)} // Adjust to one-based index
        >
          {number + 1}
        </span>
      ))
    }
          </div>
        </section>

      </div>
    </section>
  );
};

export default Tours;
