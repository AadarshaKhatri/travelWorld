
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../components/ProtectedRouting/Protected";
import { useContext } from "react";


export const ProtectedRotues = ({children} : {children:JSX.Element}) =>{
  const {user} = useContext(AuthContext);
  const location = useLocation();




  if(!user){
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
    
  }
  return children;
}