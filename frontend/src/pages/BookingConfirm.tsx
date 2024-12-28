import { FaCheck } from "react-icons/fa"
import { Link } from "react-router-dom"


const BookingConfirm = () => {
  return (
    <section>
      <div className="flex flex-col w-full py-20 justify-center items-center gap-y-5">
        <FaCheck size={100} className="border-8 border-green-600 rounded-full text-green-600 p-4 font-normal"/>
      <h1 className="text-4xl text-blue-950 mt-1">
        Your Tours has been booked! 
      </h1>

      <button className="px-5 py-3 bg-primary text-white rounded-md mt-5"><Link to="/home">Back to Home</Link></button>
      </div>
      </section>
  )
}

export default BookingConfirm