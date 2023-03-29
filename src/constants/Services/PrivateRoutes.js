import { Outlet, Navigate } from "react-router-dom";
import { TOKEN } from "./constants";

const PrivateRoutes = ({ token }) => {
  let temp = localStorage.getItem("token");
  return token || temp ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
