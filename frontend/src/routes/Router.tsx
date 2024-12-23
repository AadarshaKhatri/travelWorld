import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Tours from "../pages/Tours";
import TourDetails from "../pages/TourDetails";
import SignUp from "../pages/SignUp";
import LogIn from "../pages/LogIn";
import SearchResultList from "../pages/SeachResultList";


const Router = ()=>{
  // const routes = createBrowserRouter([
  //   {
  //     path: "/home",
  //     element: <Home />,
  //     errorElement: <div>Error Loading Route</div>,
  //   },
  //   {
  //     path: "/",
  //     element: <Navigate to="/home" replace />,
  //     errorElement: <div>Error Loading Route</div>,
  //   },
  //   {
  //     path: "/tours",
  //     element: <Tours />,
  //     errorElement: <div>Error Loading Route</div>,
  //   },
  //   {
  //     path: "/tours/:id",
  //     element: <TourDetails />,
  //     errorElement: <div>Error Loading Route</div>,
  //   },
  //   {
  //     path: "/login",
  //     element: <LogIn />,
  //     errorElement: <div>Error Loading Route</div>,
  //   },
  //   {
  //     path: "/register",
  //     element: <SignUp />,
  //     errorElement: <div>Error Loading Route</div>,
  //   },
  //   {
  //     path: "/tours/search",
  //     element: <SearchResultList />,
  //     errorElement: <div>Error Loading Route</div>,
  //   },
  //   {
  //     path: "/*",
  //     element: <div>Not Found</div>,
  //   },
  // ])
  return(
    <Routes>
      <Route path="/" element={<Navigate to="/home"/>}/>
      <Route path="/home" element={<Home/>} />
      <Route path="/tours" element={<Tours/>} />
      <Route path="/tours/:id" element={<TourDetails/>} />
      <Route path="/register" element={<SignUp/>} />
      <Route path="/login" element={<LogIn/>} />
      <Route path="/tours/search" element={<SearchResultList/>}/>
    </Routes>
  )
}




export default Router;
