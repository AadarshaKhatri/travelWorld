

interface ServiceCardProps {

  imgSrc:string,
  title:string,
  description:string,
}

const ServiceCard = (props:ServiceCardProps) => {
  return (
    <div  className="flex flex-row md:flex-col md:w-[300px] gap-x-5
    md:gap-x-0 justify-center items-center px-5">

              <div className="w-[100px] h-[100px]">
              <img src={props.imgSrc}></img>
              </div>

              <div className="mt-6 pb-4">
                <h4 className="text-blue-950 text-lg font-bold md:text-center">{props.title}</h4>
                <p className="md:text-center">{props.description}</p>
              </div>

            </div>
  )
}

export default ServiceCard