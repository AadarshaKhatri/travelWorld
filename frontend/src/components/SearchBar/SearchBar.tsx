import { useRef } from "react"
import { FaSearch } from "react-icons/fa"
import { FaLocationArrow, FaMapLocation, FaUser } from "react-icons/fa6"


const SearchBar = () => {
  const destinationRef = useRef<HTMLInputElement | null>(null);
  const distanceRef = useRef<HTMLInputElement | null>(null);
  const guestsRef = useRef<HTMLInputElement | null>(null);
  
  
  
  // Function to handle submit
  const handleClick =()=>{
    const destinationValue = destinationRef.current?.value;
    const distanceValue = distanceRef.current?.value;
    const guestsValue = guestsRef.current?.value;

    if(destinationValue==="" || distanceValue==="" || guestsValue ===""){
      alert("Every Field must be filled!");
    }

  }
  return (
   <section className="py-5">
    <div className="flex flex-row bg-white border border-gray-100 shadow-sm rounded-md p-5">
      <form className="flex flex-row gap-x-10">

        {/* Destination */}
        <div className="flex flex-row items-center gap-x-5">
        <div>
          <FaLocationArrow className="text-primary" size={24}/>
        </div>
        <div className="flex flex-col ">
        <label htmlFor="destination">Location</label>
        <input ref={destinationRef} className="outline-none" type="text" name="destination" placeholder="Where are you going?"></input>
        </div>
        </div>


        {/* Distance  */}
        <div className="flex flex-row items-center gap-x-5">
        <div>
          <FaMapLocation className="text-primary" size={24}/>
        </div>
        <div className="flex flex-col ">
        <label htmlFor="destination">Distance</label>
        <input ref={distanceRef} className="outline-none" type="number" name="destination" placeholder="Distance k/m"></input>
        </div>
        </div>

        {/* Number of People */}

        <div className="flex flex-row items-center gap-x-5">
        <div>
          <FaUser className="text-primary" size={24}/>
        </div>
        <div className="flex flex-col ">
        <label htmlFor="destination">Max People</label>
        <input ref={guestsRef} className="outline-none" type="number" name="destination" placeholder="0"></input>
        </div>
        </div>

     
        {/* Button */}
        <button onClick={handleClick} className="bg-primary p-3 rounded-md"><FaSearch size = {24} className="text-white"/></button> 

      </form>
      
    </div>
    
    </section>
  )
}

export default SearchBar