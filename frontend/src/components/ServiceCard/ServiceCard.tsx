

interface ServiceCardProps {
  key:number,
  imgSrc:string,
  title:string,
  description:string,

}

const ServiceCard = (props:ServiceCardProps) => {
  return (
    <div key={props.key} className="flex flex-col w-[300px] justify-center items-center px-5">

              <div className="w-[100px] h-[100px]">
              <img src={props.imgSrc}></img>
              </div>

              <div className="mt-6 pb-4">
                <h4 className="text-blue-950 text-lg font-bold text-center">{props.title}</h4>
                <p className="text-center">{props.description}</p>
              </div>

            </div>
  )
}

export default ServiceCard