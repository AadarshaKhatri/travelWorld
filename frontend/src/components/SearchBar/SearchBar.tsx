import { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { FaLocationArrow, FaMapLocation, FaUser } from "react-icons/fa6";
// import { useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getData } from "../../Service/GetService";

const SearchBar :React.FC = () => {
  const navigate = useNavigate();
  const addressRef = useRef<HTMLInputElement>();
  const distanceRef = useRef <HTMLInputElement> ();
  const maxGroupSizeRef = useRef <HTMLInputElement>();
  

  

  const handleClick = async (e : React.FormEvent) => {
    e.preventDefault();
    const address = String(addressRef.current?.value);
    const distance = Number(distanceRef.current?.value);
    const maxGroupSize = Number(maxGroupSizeRef.current?.value);
  
    console.log(address);
    if (!address || distance <= 0 || maxGroupSize <= 0) {
      alert("All fields must be correctly filled!");
      return;
    }
    const res = await getData(`tours/search/getTourBySearch?address=${address.trim()}&distance=${distance}&maxGroupSize=${maxGroupSize}`);
    console.log(res.data);
    
    const toursData = res.data ? res.data : [];
    navigate('/tours/search', {
      state: {
        address,
        distance,
        maxGroupSize,
        toursData// Assuming res contains the API data you need
      },
    });

  

  };
  return (
    <section className="py-5">
      <div className="flex flex-col sm:flex-row bg-white border border-gray-100 shadow-sm rounded-md p-5 gap-y-5 sm:gap-y-0">
        <form onSubmit={handleClick} className="flex flex-col sm:flex-row gap-y-5 sm:gap-y-0 sm:gap-x-10 w-full"
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
              type="submit"
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
