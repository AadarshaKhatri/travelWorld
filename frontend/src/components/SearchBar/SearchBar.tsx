import { useState, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { FaLocationArrow, FaMapLocation, FaUser } from "react-icons/fa6";
// import { useNavigate } from "react-router-dom";
import { PostFetchData } from "../../hooks/Fetch";


const SearchBar = () => {
  const addressRef = useRef();
  const distanceRef = useRef();
  const maxGroupSizeRef = useRef();
  const [payload, setPayload] = useState({ address: "", distance: 0, maxGroupSize: 0 });

  

  const handleClick = async () => {
    const address = addressRef.current?.value;
    const distance = distanceRef.current?.value;
    const maxGroupSize = maxGroupSizeRef.current?.value;

    setPayload({
      address:address,
      distance:distance,
      maxGroupSize:maxGroupSize
    })
  
    if (!address || distance <= 0 || maxGroupSize <= 0) {
      alert("All fields must be correctly filled!");
      return;
    }
  
    try {
      const res = await PostFetchData("tours/search/getTourBySearch",payload);
      console.log(res);
      // navigate(tours/${res.id});
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <section className="py-5">
      <div className="flex flex-col sm:flex-row bg-white border border-gray-100 shadow-sm rounded-md p-5 gap-y-5 sm:gap-y-0">
        <form className="flex flex-col sm:flex-row gap-y-5 sm:gap-y-0 sm:gap-x-10 w-full"
        >
          {/* Destination */}
          <div className="flex flex-col sm:flex-row items-center gap-x-5 w-full sm:w-auto">
            <FaLocationArrow className="text-primary sm:mr-2" size={24} />
            <div className="flex flex-col w-full">
              <label htmlFor="destination" className="text-sm font-medium">
                Location
              </label>
              <input
                ref={addressRef}
                className="outline-none  w-full sm:w-auto"
                type="text"
                name="address"
                placeholder="Where are you going?"
              />
            </div>
          </div>

          {/* Distance */}
          <div className="flex flex-col sm:flex-row items-center gap-x-5 w-full sm:w-auto">
            <FaMapLocation className="text-primary sm:mr-2" size={24} />
            <div className="flex flex-col w-full">
              <label htmlFor="distance" className="text-sm font-medium">
                Distance
              </label>
              <input
                ref={distanceRef}
                className="outline-none  w-full sm:w-auto"
                type="number"
                name="distance"
                placeholder="Distance (km)"
              />
            </div>
          </div>

          {/* Number of People */}
          <div className="flex flex-col sm:flex-row items-center gap-x-5 w-full sm:w-auto">
            <FaUser className="text-primary sm:mr-2" size={24} />
            <div className="flex flex-col w-full">
              <label htmlFor="guests" className="text-sm font-medium">
                Max People
              </label>
              <input
                ref={maxGroupSizeRef}
                className="outline-none  w-full sm:w-auto"
                type="number"
                name="maxGroupSize"
                placeholder="0"
              />
            </div>
          </div>

          {/* Button */}
          <div className="flex justify-end sm:items-center w-full sm:w-auto">
            <button
              onClick={handleClick}
              className="bg-primary p-3 rounded-md flex items-center justify-center sm:w-auto w-full"
            >
              <FaSearch size={24} className="text-white" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SearchBar;
