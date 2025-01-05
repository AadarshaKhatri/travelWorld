
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface ChildrenProps {
  children:ReactNode
}
const ProtectedRoute = ( children : ChildrenProps ) => {
  const token = localStorage.getItem("token"); 

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children; // Render the protected component
};

export default ProtectedRoute;
