
import FeaturedTourList from "../components/FeaturedToursList/FeaturedTourList"
import SearchBar from "../components/SearchBar/SearchBar"
import ServiceCard from "../components/ServiceCard/ServiceCard"



const Home = () => {
  const ServiceData = [
    {
      imgSrc:"assets/Guided_Tours.png",
      title:"Guided Tours",
      description:"sunt qui repellat saepe quo velit aperiam id aliquam placeat."
    },
    {
      imgSrc:"assets/flight.png",
      title:"Best Flights Option",
      description:"sunt qui repellat saepe quo velit aperiam id aliquam placeat."
    },
    {
      imgSrc:"assets/religious.png",
      title:"Religious Tours",
      description:"sunt qui repellat saepe quo velit aperiam id aliquam placeat."
    },
    {
      imgSrc:"assets/insurance.png",
      title:"Medical Insurance",
      description:"sunt qui repellat saepe quo velit aperiam id aliquam placeat."
    },
  ]

  return (
    <section className="pb-20 pt-10">
      <div className="container mx-auto">

        {/* Upper Section */}
      <div>
      {/* Title Here */}
        <div>
          <h2 className="font-semibold text-8xl text-center  text-blue-950">Book a Ticket And </h2>
          <h2 className="font-semibold text-8xl text-center text-blue-950">
          Just Leave
          </h2>
        </div>

        {/* Sub Text */}
        <div className="w-full mt-5">
          <h4 className="text-gray-700 text-center text-xl">Discover Amazing Places at Exclusive Prices</h4>
        </div>


        {/* Search Bar  */}
        <div className="flex justify-center">
          <SearchBar/>
        </div>


      {/* Images  */}
        <div className="  w-[400px] lg:w-[1000px] flex flex-row justify-center items-center mt-10 mx-auto pb-20">
          <img src = "assets/Teamwork.png" className="flex justify-center text-center"></img>
        </div>



        </div>

        {/* Service Provided */}

        <div>

          
          <div className="flex flex-col">
            <h2 className="font-semibold text-red-400 text-sm text-center">CATEGORY</h2>
            <h2 className="text-blue-950 text-4xl font-bold text-center mt-5">We Offer Best Services</h2>
          </div>
          

          <div className="flex flex-col px-4 md:flex-row mt-20">
            {/* Card */}
            {
              ServiceData.map((currentElement,index)=>(

                <ServiceCard
                key={index}
                imgSrc={currentElement.imgSrc}
                title={currentElement.title}
                description={currentElement.description}
                />
              ))
            }

          </div>
        </div>
        

        {/* Featured List */}
        <div className="mt-10">
            <FeaturedTourList/>
          </div>

      </div>


    </section>
  )
}

export default Home