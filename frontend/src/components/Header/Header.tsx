
import { useContext, useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../ProtectedRouting/Protected";




const Header = () => {
  const {user,dispatch}  = useContext(AuthContext);
  const navigate = useNavigate();
  const logout = ()=>{
    dispatch({type:"LOGOUT"});
    navigate("/")
  }
  const HeadersList = [
    {
      path:"/home",
      display:"Home",

    },
    {
      path:"/about",
      display:"About",
    },{
      path:"/tours",
      display:"Tours"
    },

  ]
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleClick() {
   
    setIsMenuOpen((prevState)  => !prevState);
  }

  return (
    <header
    className="sticky top-0 backdrop-blur-sm z-50">
    
      <div className="flex flex-row justify-between items-center py-5 px-5">

        <div>
          <h2 className="text-lg font-bold text-black">Logo Here</h2>
        </div>
        
     
        <div className="md:hidden">
          <button onClick={handleClick}>
              <IoIosMenu className="text-gray-900 cursor-pointer md:hidden" size={24} />
          </button>
        </div>
        
        <div className="hidden md:flex">
          <nav  className="flex flex-row gap-x-5 justify-center items-center">
        {
          HeadersList.map((currentElement,index)=>(
          <NavLink key={index} className="text-gray-800 font-light hover:underline" to={currentElement.path}>{currentElement.display}</NavLink>
          
       
        ))
      }
      </nav>
</div>

      {/* Buttons Here - Right Side of the Nav Bar */}
      {
        user ? 
        <div className="flex flex-row justify-center items-center gap-5">
          <h5 className="text-black">Welcome, {user?.data.username}</h5>
          <button onClick={logout} className="py-2 px-3 text-white bg-red-600 rounded-md">LogOut</button>
        </div>
        :

        <div className="flex flex-row gap-x-5">
      <Link to = "/register"><button 
          className="text-white bg-primary py-3 px-1 rounded-lg"
          >Get Started for free
          </button></Link>
         <Link to="/login"> <button 
          className="text-primary border border-primary py-3 px-5 rounded-lg hover:bg-primary hover:text-white"
          >Log In
          </button></Link>
      </div>
      }
      


      </div>

    
      {isMenuOpen && (
               <>
               <div className="fixed  w-screen h-screen inset-0 bg-white z-40 md:hidden" />
               <div className="fixed top-0 left-0 w-full h-full bg-white z-50 md:hidden">
                 <div className="p-4">
                   <nav className="flex flex-col gap-y-5">
                    <div className="w-full flex flex-row justify-end">
                    <button onClick={handleClick}>
                      <RxCross2 className="text-gray-900 cursor-pointer " size={24} />
                    </button>
                    </div>
                    
                   
                     <a className="text-gray-600 font-light hover:bg-gray-100 p-2 rounded-md" href="#">About Us</a>
                     <a className="text-gray-600 font-light  hover:bg-gray-100 p-2 rounded-md" href="#">Products</a>
                     <a className="text-gray-600 font-light  hover:bg-gray-100 p-2 rounded-md" href="#">Contact Us</a>
                     <a className="text-gray-600 font-light  hover:bg-gray-100 p-2 rounded-md" href="#">Help and Support</a>
                     <button className="text-white bg-black p-4 rounded-lg">Get Started for free</button>
                   </nav>
                 </div>
               </div>
             </>
      )}
     
      
    </header>
  )
}

export default Header