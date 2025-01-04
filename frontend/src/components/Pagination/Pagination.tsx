import { useEffect, useState } from "react";
import { getData } from "../../Service/GetService";

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
const Pagination = () => {
  const [data,setData] = useState<ApiResponse>();
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const FetchData = async ()=>{
      const res = await getData("/tours");
     setData(res.data);
     console.log(data);
    }
    FetchData();
    const pages = Math.ceil(5 / 4);
    setPageCount(pages);
  }, [page]);

  return (
    <section className="overflow-x-hidden">
      <div className="w-full mx-10 flex flex-row justify-center pb-10">
        {
          [...Array(pageCount).keys()].map(number => (
            <span
              key={number}
              className={`px-2 py-1 cursor-pointer ${page === number ? "bg-blue-500 text-white" : ""}`}
              onClick={() => setPage(number)}
            >
              {number + 1}
            </span>
          ))
        }
      </div>
    </section>
  );
};

export default Pagination;
