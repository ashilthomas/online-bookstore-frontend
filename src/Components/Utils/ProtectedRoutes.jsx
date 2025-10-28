import { Navigate } from "react-router-dom";

function ProtectedRoutes({ children }) {
  const token = sessionStorage.getItem("token");
  return token ? children : <Navigate to="/sign" replace />;
}

export default ProtectedRoutes;
