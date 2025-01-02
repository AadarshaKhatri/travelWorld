import { FaLocationArrow, FaStar } from "react-icons/fa"
import { Link } from "react-router-dom"

interface Review {
  _id: string;
  username: string;
  reviewText: string;
  ratings: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
interface TourCardProps {
  id:number,
  title:string,
  city:string,
  address:string,
  distance:number,
  price:number,
  groupSize:number
  description:string,
  reviews:Review[],
  photo:string,
  featured:boolean,
}


const TourCard = (props:TourCardProps) => {
  return (
    <section >
      <div>
        <div className=" relative flex flex-col w-[300px] rounded-md shadow-sm">

          {/* Img */}
          <div>
            <img className="object-cover rounded-t-md" src={props.photo}></img>
          </div>

          {/* Featured */}

          <div>
            {
              props.featured && 
              <div className="absolute right-0 top-40  ">
                <p className="bg-primary text-white px-3 py-2">Featured</p>
                </div>
             
            }
          </div>

          <div className="flex flex-row justify-between mt-2 px-2">

            <div>
              <h2 className="flex flex-row items-center gap-x-2"><FaLocationArrow size={12}/> {props.city}</h2>
            </div>

       

            <div>
              <h4 className="flex flex-row items-center gap-4"><FaStar className="text-yellow-500"/>({props.reviews.length})</h4>
            </div>
          </div>

          <div className="mt-4 px-2">
            <h4 className="text-lg font-semibold">{props.address}</h4>
          </div>

          <div className="mt-2 flex flex-row justify-between items-center px-2 pb-5">
            <div>
              <h6 className="text-primary font-bold text-sm">Rs {props.price}/per person</h6>
            </div>

            <div>
              <Link to={`/tours/${props.id}`}><button className="bg-yellow-500 text-white p-2 rounded-md cursor-pointer">Book Now</button></Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default TourCard