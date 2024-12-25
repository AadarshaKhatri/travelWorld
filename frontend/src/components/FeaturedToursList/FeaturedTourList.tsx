import TourCard from "../TourCard/TourCard"


const FeaturedTourList = () => {
  const TourDetails = [
    
      {
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
      <div className="flex flex-col">
        <h3 className="text-lg text-red-400 text-center">TRENDY</h3>
        <h2 className="text-blue-950 text-4xl font-bold text-center mt-5">Our Trending Tour</h2>
        <h2 className="text-blue-950 text-4xl font-bold text-center mt-5" >Packages</h2>
      </div>

      <div className="flex flex-col justify-center items-center md:flex-row md:flex-wrap gap-5 mt-10">
        {
          TourDetails.map((currentElement,index)=>(
            
            <TourCard
            key={index}
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
    </section>
  )
}

export default FeaturedTourList