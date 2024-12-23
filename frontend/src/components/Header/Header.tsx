import { NavLink } from "react-router-dom"


const Header = () => {
  // const HeadersList = [
  //   {
  //     path:"/",
  //     display:"Company",
  //   },
  //   {
  //     path:"/home",
  //     display:"Home",

  //   },
  //   {
  //     path:"/about",
  //     display:"About",
  //   },{
  //     path:"/tours",
  //     display:"Tours"
  //   },
  //   {
  //     path:"/register",
  //     display:"Register Now"
  //   },{
  //     path:"/login",
  //     display:"Sign In",
  //   }
  // ]

  return (
    <section className="py-10 w-full">
      <div className="flex flex-row justify-between items-center">
        {/* Logo  */}
        <div>
          <img src = "" alt = "Company Logo"></img>
        </div>

        {/* Navigation Links */}
        <NavLink to = "/tours">Hello</NavLink>
        {/* <div>
          <Link className="text-bold text-black" to="/home">Home</Link>
          <Link to="/home">Home</Link>
          <Link to="/home">Home</Link>
          <Link to="/home">Home</Link>
        </div> */}
      </div>
    
    </section>
  )
}

export default Header