import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Tours from "../pages/Tours";
import TourDetails from "../pages/TourDetails";
import SignUp from "../pages/SignUp";
import LogIn from "../pages/LogIn";
import SearchResultList from "../pages/SearchResultList";
import About from "../pages/About";
import BookingConfirm from "../pages/BookingConfirm";
import { ProtectedRotues } from "../hooks/ProtectedRoutes";


const Router = ()=>{

  return(
    <Routes>
      <Route path="/" element={<Navigate to="/home"/>}/>
      <Route path="/home" element={<ProtectedRotues><Home/></ProtectedRotues>} />
      <Route path="/tours" element={<ProtectedRotues><Tours/></ProtectedRotues>} />
      <Route path="/tours/:id" element={<ProtectedRotues children={<TourDetails/>}/>} />
      <Route path="/register" element={<SignUp/>} />
      <Route path="/login" element={<LogIn/>} />
      <Route path="/about" element={<ProtectedRotues><About/></ProtectedRotues>}/>
      <Route path="/booking-confirm" element={<ProtectedRotues><BookingConfirm/></ProtectedRotues>}/>
      <Route path="/tours/search" element={<ProtectedRotues children = {<SearchResultList/>}/>}/>


    
    </Routes>
  )
}




export default Router;
