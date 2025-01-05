import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Tours from "../pages/Tours";
import TourDetails from "../pages/TourDetails";
import SignUp from "../pages/SignUp";
import LogIn from "../pages/LogIn";
import SearchResultList from "../pages/SearchResultList";
import About from "../pages/About";
import BookingConfirm from "../pages/BookingConfirm";


const Router = ()=>{

  return(
    <Routes>
      <Route path="/" element={<Navigate to="/home"/>}/>
      <Route path="/home" element={<Home/>} />
      <Route path="/tours" element={<Tours/>} />
      <Route path="/tours/:id" element={<TourDetails/>} />
      <Route path="/register" element={<SignUp/>} />
      <Route path="/login" element={<LogIn/>} />
      <Route path="/about" element={<About/>}/>
      <Route path="/booking-confirm" element={<BookingConfirm/>}/>
      <Route path="/tours/search" element={<SearchResultList/>}/>


    
    </Routes>
  )
}




export default Router;
