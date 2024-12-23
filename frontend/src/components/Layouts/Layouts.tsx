import {} from "react-router-dom"
import Router from "../../routes/Router"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"

  
const Layouts = () => {
  return (
    <>
    <Header/>
      <Router/>
    <Footer/>

    </>
  )
}

export default Layouts