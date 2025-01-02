import { useNavigate, useParams } from "react-router-dom"
import { FaStar } from "react-icons/fa"
import {  CiLocationOn } from "react-icons/ci";
import { RiUserLocationFill } from "react-icons/ri";
import { MdAttachMoney, MdGroups } from "react-icons/md";
import { GiMonkey } from "react-icons/gi";
import React, { useRef, useState } from "react";




interface tourData {
  id:number,
  title:string,
  city:string,
  address:string,
  distance:number,
  price:number,
  maxGroupSize:number,
  desc:string,
  reviews:Array<string>,
  photo:string,
  featured:boolean,
}


const TourDetails = () => {
  const TourDetails  = [
    
    {
      "id":0,
      "title": "Westminister Bridge",
      "city": "London",
      "address": "Somewhere in London",
      "distance": 300,
      "price": 99,
      "maxGroupSize": 10,
      "desc": "this is the description",
      "reviews": ["Best Place", "This is a great place , I highly recommend to visit"],
  
      "photo": "/assets/tour-img01.jpg",
      "featured": true
    },
    {
      "id":1,
      "title": "Bali, Indonesia",
      "city": "Bali",
      "address": "Somewhere in Indonesia",
      "distance": 400,
      "price": 99,
      "maxGroupSize": 8,
      "desc": "this is the description",
      "reviews": [],
  
      "photo": "/assets/tour-img02.jpg",
      "featured": true
    },
    {
      "id":2,
      "title": "Snowy Mountains, Thailand",
      "city": "Bangkok",
      "address": "Somewhere in Thailand",
      "distance": 500,
      "price": 99,
      "maxGroupSize": 8,
      "desc": "this is the description",
      "reviews": [],
  
      "photo": "/assets/tour-img03.jpg",
      "featured": true
    },
    {
      "id":3,
      "title": "Beautiful Sunrise, Thailand",
      "city": "Phuket",
      "address": "Somewhere in Thailand",
      "distance": 500,
      "price": 99,
      "maxGroupSize": 8,
      "desc": "this is the description",
      "reviews": [],
  
      "photo": "/assets/tour-img04.jpg",
      "featured": true
    },
    {
      "id":4,
      "title": "Nusa Pendia Bali, Indonesia",
      "city": "Bali",
      "address": "Somewhere in Indonesia",
      "distance": 500,
      "price": 99,
      "maxGroupSize": 8,
      "desc": "this is the description",
      "reviews": [],
  
      "photo": "/assets/tour-img02.jpg",
      "featured": true
    },
    {
      "id":5,
      "title": "Cherry Blossoms Spring",
      "city": "Tokyo",
      "address": "Somewhere in Japan",
      "distance": 500,
      "price": 99,
      "maxGroupSize": 8,
      "desc": "this is the description",
      "reviews": [],
  
      "photo": "/assets/tour-img01.jpg",
      "featured": true
    },
    {
      "id":6,
      "title": "Holmen Lofoten, France",
      "city": "Paris",
      "address": "Somewhere in France",
      "distance": 500,
      "price": 99,
      "maxGroupSize": 8,
      "desc": "this is the description",
      "reviews": [],
  
      "photo": "/assets/tour-img05.jpg",
      "featured": true
    },
    {
      "id":7,
      "title": "Snowy Mountains, Thailand",
      "city": "Bangkok",
      "address": "Somewhere in Thailand",
      "distance": 500,
      "price": 99,
      "maxGroupSize": 8,
      "desc": "this is the description",
      "reviews": [],
  
      "photo": "/assets/tour-img04.jpg",
      "featured": true
    },
    {
      "id":8,
      "title": "Jaflong, Sylhet",
      "city": "Sylhet",
      "address": "Somewhere in Sylhet",
      "distance": 100,
      "price": 99,
      "maxGroupSize": 5,
      "desc": "this is the description",
      "reviews": [],
  
      "photo": "/assets/tour-img01.jpg",
      "featured": false
    },
    {
      "id":9,
      "title": "Cox's Bazar Sea Beach",
      "city": "Chittagong",
      "address": "Somewhere in Chittagong",
      "distance": 500,
      "price": 99,
      "maxGroupSize": 8,
      "desc": "this is the description",
      "reviews": [],
  
      "photo": "/assets/tour-img03.jpg",
      "featured": false
    }
  ]

  const navigate = useNavigate();

  const personRef = useRef<HTMLInputElement | null>(null);
  const [credentials, setCredentials] = useState({
    _id:"01",
    userEmail:"adarskahtr1@gmail.com",
    username:"",
    membersNo:1,
    phone:"",
    booked_date:"",
  });



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value > 0 && value<=12) {
      setCredentials((prev) => ({
        ...prev,
        membersNo: value,
      }
    
    ));
    }

    if(value>=13){
      
      alert("Cannot go above 12");
      setCredentials((prev)=>({
        ...prev,
        membersNo:12,
      }));
      
    }
  };

const handleClick = ()=>{
  console.log("Booked")
  navigate("/booking-confirm")
}



  const {id}  = useParams();

  //This is a static data; later we will call our API and load the data from the database.
  const tour :tourData | undefined = TourDetails.find((tour)=> tour.id === Number(id));

  const Service_charge = 10;
  const perPersonPrice = tour ? tour.price * credentials.membersNo : 0;
  const total_amount = Service_charge + perPersonPrice;
  
  const options : Intl.DateTimeFormatOptions = {day:'numeric' , month:'long',year:'numeric'}
 
  if(!tour){
    return (
      <div>
        Tour Not Found 
        </div>
    )
  }
  console.log(tour);
  
  return (
   <section className="overflow-x-hidden">
    <div className=" flex flex-col md:flex-row min-h-screen justify-center pb-20">

     <div className="md:w-[700px] mx-10 md:ml-20">
      {/* Image Here */}
      <div className="pb-5">
      <img src={tour.photo} alt="Tour Image" className="rounded-t-md"></img>
      </div>


      {/* Information Here */}

      <div className="w-full border-2 border-gray-200 rounded-md p-5 ">
        <div className="flex flex-col gap-y-5">
          <h2 className="text-2xl text-blue-950 font-semibold">{tour.title} , {tour.city}</h2>

          <div className="flex flex-row gap-x-10">
               <div>

                {
                  tour.reviews.length === 0 ? <h4 className="flex flex-row text-gray-400 items-center gap-2"><FaStar className="text-yellow-500"/>Not Rated</h4> : <h4 className="flex flex-row text-gray-400 items-center gap-2"><FaStar className="text-yellow-500"/>{tour.reviews.length}</h4>
                }      
                </div>

                <div>
                <h4 className="flex flex-row text-gray-400 items-center gap-2"><RiUserLocationFill className="text-blue-950 " size={20}/>{tour.address}</h4> 
                </div>



          </div>

          <div className="flex flex-col md:flex-row gap-x-10">
                <h4 className="flex flex-row text-gray-400 items-center gap-2"><CiLocationOn className="text-blue-950 " size={24}/>{tour.city}</h4> 

                <h4 className="flex flex-row text-gray-400 items-center gap-2"><MdAttachMoney className="text-blue-950 " size={24}/>$ {tour.price} /per person </h4> 

                <h4 className="flex flex-row text-gray-400 items-center gap-2"><MdGroups className="text-blue-950 " size={24}/> Maximum Guest: {tour.maxGroupSize}</h4> 

          </div>

      {/* Description  */}
          <div className="pb-8">
            <h2 className="text-xl font-semibold text-blue-950 mt-2">Description</h2>

            <h6 className="mt-5 text-gray-400">{tour.desc}</h6>
          </div>
        </div>
      </div>


         {/* reviews */}
         <div className="w-full border-2 border-gray-200 rounded-md p-5 mt-5 mb-10 ">
            
            <div>
                <h2 className="text-blue-950 font-semibold text-xl">Reviews({tour.reviews?.length})</h2>
            </div>

            {/* Review Form Here */}
            <div className="border-2 rounded-full border-primary/50 mt-5">
              <form className="flex flex-row mx-10 py-2">
                <input type="text" placeholder="Share your thoughts here" className="outline-none w-full"></input>

                <button className="px-3 py-2 rounded-md cursor-pointer text-white font-semibold bg-primary">Submit</button>
              </form>
            </div>


            <div className="py-3">
              <hr className=""></hr>
            </div>

              {/* Users Review Here */}
            <div>

              {
                tour.reviews.map((review,index)=>(
                  <div className="flex flex-col">
                    

                    <div className="flex flex-row gap-x-5 py-5">
                      <div className="">
                        <GiMonkey size={42}/>
                      </div>

                      <div>
                        <h2 className="text-md font-semibold">Username  <span className="pl-5 text-sm text-gray-300">{new Date().toLocaleDateString('en-US', options)}</span></h2>
                     <ul key={index} className="mt-2">
                          <li className="text-sm font-light ">{review}</li>
                      </ul>
                      </div>

                    </div>


                   
                  </div>
                ))
              }

            </div>
      </div>





     </div>

     <div className="w-[400px] mx-10 md:mx-0 md:mr-10 bg-white  -right-5">
      <div className="flex flex-col border-2 border-gray-200 p-5 rounded-md ">
        <h2 className="text-blue-950 text-sm font-semibold">Book Now!</h2>

        <div className="mt-4 flex flex-row justify-between items-center">
          <div className="">
            <h2 className="text-2xl font-semibold text-blue-950">$ {tour.price}/per person</h2>
          </div>

          <div>
            <h6 className="text-sm flex flex-row gap-1 justify-center items-center"><FaStar className="text-yellow-500"/>{tour.reviews.length}</h6>
          </div>
        </div>


        <div className="pt-4 pb-4">
          <hr></hr>
        </div>

        <div>
          <h2 className="text-md font-semibold text-blue-950">Information</h2>
        </div>



        {/* Booking Form here */}


        <form onSubmit={handleClick} className="flex flex-col gap-y-5 ">
          <input className="w-full outline-none border-b-2 p-2" type="text" placeholder="Enter your full Name"></input>
          <input className="w-full outline-none border-b-2 p-2" type="number" placeholder="Phone Number"></input>

          <div className="flex flex-row gap-x-2">
            <input className="w-full outline-none border-b-2 p-2 text-gray-400"  type="date"></input>
            <input max={12} ref={personRef}  onChange={handleChange} name="guest" className="w-full outline-none border-b-2 p-2" type="number" placeholder="Guests"></input>

          </div>

          {/* Calculation Here */}
          <div className="flex flex-row justify-between">
            <h2 className="text-gray-700">$99 x {personRef?.current?.value} person</h2>
            <h2 className="text-gray-700 font-light">${perPersonPrice}</h2>
          </div> 


          <div className="flex flex-row justify-between">
            <h2 className="text-gray-700 ">Service Charge</h2>
            <h2 className="text-gray-700 font-light">${Service_charge}</h2>
          </div>

          <div className="flex flex-row justify-between">
            <h2 className="text-blue-950 font-semibold">Total</h2>
            <h2 className="text-gray-700 font-semibold">${total_amount}</h2>
          </div>
          <button  className="w-full bg-primary py-3 text-white cursor-pointer rounded-md">Book</button>
        </form>

      </div>
     </div>

     </div>
   </section>
  )
  
}

export default TourDetails