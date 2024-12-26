
import Pagination from "../components/Pagination/Pagination"
import SearchBar from "../components/SearchBar/SearchBar"
import TourCard from "../components/TourCard/TourCard"


const Tours = () => {
  const TourDetails = [
    
    {
      "id":0,
      "title": "Westminister Bridge",
      "city": "London",
      "address": "Somewhere in London",
      "distance": 300,
      "price": 99,
      "maxGroupSize": 10,
      "desc": "this is the description",
      "reviews": [],
  
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
  return (
    <section>
      <div>

        {/* UpperSection */}
        <div className="relative flex flex-row justify-center items-center pb-20">
          <img src="/assets/tour-img01.jpg" className="w-full max-h-[300px] object-fill">
          
          </img>
          <h2 className="text-8xl text-white absolute font-bold top-10">Tours</h2>
        </div>

        {/* Search Bar */}

        <div className="w-full flex flex-row justify-center">
          <SearchBar/>
        </div>

      {/* Featured Tours Card */}
        <div >
          <h2 className="font-semibold text-2xl ml-14">--ALL TOURS--</h2>


          <div className="flex flex-col justify-center items-center md:flex-row md:flex-wrap gap-5 mt-10 pb-20">
        {
          TourDetails.map((currentElement,index)=>(
            
            <TourCard
            key={index}
            id={currentElement.id}
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
          ))
        }

      </div>

        </div>

        <div>
          
        </div>
        <Pagination/>
      </div>

  
    </section>
  )
}

export default Tours