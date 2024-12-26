import { useParams } from "react-router-dom"
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
  const {id}  = useParams();

  //This is a static data; later we will call our API and load the data from the database.
  const tour :tourData | undefined = TourDetails.find((tour)=> tour.id === Number(id));

  console.log(id);
  console.log(tour?.id)
  if(!tour){
    return (
      <div>
        Tour Not Found 
        </div>
    )
  }
  console.log(tour);
  
  return (
   <section>
     <div>
      <h2>{tour.title}</h2>
      <h2>{tour.id}</h2>
      <h2>{tour.city}</h2>
      <h2>{tour.featured}</h2>
      <h2>{tour.price}</h2>
      <h2>{tour.address}</h2>
      <h2>{tour.distance}</h2>
      <h2>{tour.maxGroupSize}</h2>
      <h2>{tour.desc}</h2>
      <h2>{tour.reviews}</h2>
      <img src={tour.photo}></img>
     </div>
   </section>
  )
}

export default TourDetails