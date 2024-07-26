import { useNavigate } from "react-router-dom";

function ProtectedRoutes({ children }) {
  const navigate = useNavigate();

  const token = sessionStorage.getItem("token");

  if (token == null) {
    navigate("/", { replace: true });
  }

  return token ? children : navigate("/");
}

export default ProtectedRoutes;
