import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { RiUserLocationFill } from "react-icons/ri";
import { MdAttachMoney, MdGroups } from "react-icons/md";
import { GiMonkey } from "react-icons/gi";
import { getData,postData } from "../Service/GetService";



interface Review {
  _id: string;
  username: string;
  reviewText: string;
  ratings: number;
  createdAt: string;
  updatedAt: string;
}

interface DataProps {
  _id: string;
  title: string;
  city: string;
  address: string;
  distance: number;
  desc: string;
  price: number;
  maxGroupSize: number;
  reviews: Review[];
  photo: string;
  featured: boolean;
}

interface ResponseTypes{
  success:boolean,
  message:string,
  data:DataProps,
}
interface UserProps{
  createdAt:string,
  email:string,
  password:string,
  role:string,
  updatedAt:string,
  username:string,
}
interface localStorageProps {
  success:boolean,
  token:string,
  message:string,
  data:UserProps,
}

const TourDetails: React.FC = () => {
  
  const [tour, setTour] = useState<ResponseTypes | null>(null);

  const navigate = useNavigate();
  const { id } = useParams();
  const reviewRef =useRef<HTMLInputElement | null>(null);
  const fullnameRef = useRef<HTMLInputElement | null>(null);
  const dateRef = useRef<HTMLInputElement | null>(null);
  const phoneNumberRef = useRef<HTMLInputElement | null>(null);
  const personRef = useRef<HTMLInputElement | null>(null);
  const [maxGuests, setMaxGuests] = useState(1);
  const user: localStorageProps = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user") as string)
  : null;

 

  console.log(user);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `/tours/${id}`;
        const res = await getData(url);
        setTour(res.data);
      } catch (err) {
        console.error("Failed to fetch data", err);
      }
    };
    fetchData();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value > 0 && value <= 12) {
      setMaxGuests(value);
    } else if (value > 12) {
      alert("Cannot go above 12");
      setMaxGuests(12);
    }
  };

  const tourTitle = tour?.data.title
  const username = user?.data.username;
  console.log(tour);
  const handleClick = async (e: React.FormEvent) => {
    e.preventDefault();
    const fullname = fullnameRef.current?.value;
    const phoneNumber = phoneNumberRef.current?.value;
    const date = dateRef.current?.value;
    const person = personRef.current?.value;

    if(!fullname || !phoneNumber || !date || !person){
      alert("All Fields Required!")

    }

  const res = await postData(`booking/${id}`,{
    tourName:tourTitle,
    fullName:fullname,
    phone:phoneNumber,
    bookAt:date,
    guestSize:person,
    });
    if(res.data){
      navigate("/booking-confirm")
    }
    console.log(res.data);
  };


  const serviceCharge = 10;
  const perPersonPrice = tour ? tour.data.price * maxGuests : 0;
  const totalAmount = serviceCharge + perPersonPrice;

  const dateFormatOptions: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  if (!tour?.data) {
    return <div>Tour Not Found</div>;
  }

  const handleReviewSubmit = async (e : React.FormEvent)=>{
    e.preventDefault();
    const review  = reviewRef.current?.value;
    const res = await postData(`reviews/${id}`,{
      reviewText:review,
      username:username,
    });
    if(!res.data){
      alert("Failed to post review");
    }else{
      alert("Your Review have been submitted!")
      window.location.reload();
    }
    
  }

  return (
    <section className="overflow-x-hidden">
      <div className="flex flex-col md:flex-row min-h-screen justify-center pb-20">
        <div className="md:w-[700px] mx-10 md:ml-20">
          <div className="pb-5">
            <img src={tour?.data?.photo} alt="Tour" className="rounded-t-md" />
          </div>

          <div className="w-full border-2 border-gray-200 rounded-md p-5">
            <h2 className="text-2xl text-blue-950 font-semibold">
              {tour?.data.title}
            </h2>
            <div className="flex flex-row gap-x-10">
              <h4 className="flex items-center gap-2 text-gray-400">
                <FaStar className="text-yellow-500" />
                {tour?.data.reviews.length > 0
                  ? tour.data.reviews.length
                  : "Not Rated"}
              </h4>
              <h4 className="flex items-center gap-2 text-gray-400">
                <RiUserLocationFill className="text-blue-950" />
                {tour?.data.address}
              </h4>
            </div>
            <div className="flex flex-col md:flex-row gap-x-10">
              <h4 className="flex items-center gap-2 text-gray-400">
                <CiLocationOn className="text-blue-950" />
                {tour?.data.city}
              </h4>
              <h4 className="flex items-center gap-2 text-gray-400">
                <MdAttachMoney className="text-blue-950" />
                ${tour?.data.price} /person
              </h4>
              <h4 className="flex items-center gap-2 text-gray-400">
                <MdGroups className="text-blue-950" />
                Max Guests: {tour?.data.maxGroupSize}
              </h4>
            </div>
            <div className="mt-5">
              <h2 className="text-xl font-semibold text-blue-950">Description</h2>
              <p className="mt-2 text-gray-400">{tour?.data.desc}</p>
            </div>
          </div>

          <div className="w-full border-2 border-gray-200 rounded-md p-5 mt-5">
            <h2 className="text-blue-950 font-semibold text-xl">
              Reviews ({tour?.data.reviews.length})
            </h2>

            {/*   Form Here */}
            <form onSubmit={handleReviewSubmit} className="flex gap-2 mt-5">
              <input
              ref = {reviewRef}
                type="text"
                placeholder="Share your thoughts here"
                className="flex-grow border-b-2 outline-none"
              />
              <button

                type="submit"
                className="px-4 py-2 bg-primary text-white rounded-md"
              >
                Submit
              </button>
            </form>
            <div className="py-3">
              <hr />
            </div>
            {tour?.data?.reviews.map((review : Review) => (
              <div key={review._id} className="flex gap-5 py-5">
                <GiMonkey size={42} />
                <div>
                  <div className="flex flex-row gap-x-2 justify-start items-center">
                      <h2 className="text-md font-semibold">
                        {review.username}
                      
                      </h2>
                      <h4 className="text-sm text-gray-400 ">
                          {new Date(review.createdAt).toLocaleDateString(
                            "en-US",
                            dateFormatOptions
                          )}
                        </h4>
                    </div>
                  <p className="text-sm text-gray-600">{review.reviewText}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        

        {/* Left Side */}
        <div className="w-[400px] mx-10 md:mr-10">
          <div className="p-5 border-2 border-gray-200 rounded-md">
            <h2 className="text-sm font-semibold text-blue-950">Book Now!</h2>
            <div className="flex justify-between items-center mt-4">
              <h2 className="text-2xl font-semibold text-blue-950">
                ${tour?.data.price}/person
              </h2>
              <h6 className="text-sm flex items-center gap-1">
                <FaStar className="text-yellow-500" />
                {tour?.data.reviews.length}
              </h6>
            </div>
            <hr className="my-4" />


            <form onSubmit={handleClick} className="flex flex-col gap-4">
              <input
                ref = {fullnameRef}
                name="fullname"
                className="border-b-2 p-2 outline-none"
                type="text"
                placeholder="Enter your full name"
              />
              <input
                ref = {phoneNumberRef}
                name = "phoneNumber"
                className="border-b-2 p-2 outline-none"
                type="number"
                placeholder="Phone number"
              />
              <div className="flex gap-2">
                <input
                 ref= {dateRef}
                  className="border-b-2 p-2 outline-none"
                  type="date"
                />
                <input
                  name = "guestSize"
                  ref={personRef}
                  onChange={handleChange}
                  className="border-b-2 p-2 outline-none"
                  type="number"
                  placeholder="Guests"
                  max={12}
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-primary text-white rounded-md"
              >
                Confirm Booking
              </button>
              <p className="mt-2 text-sm text-gray-600">
                Total Amount: ${totalAmount}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourDetails;
