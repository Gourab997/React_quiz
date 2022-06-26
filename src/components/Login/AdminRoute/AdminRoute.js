import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../hook/useAuth";

const AdminRoute = ({ children }) => {
  const { user, isLoading, admin } = useAuth();
  const location = useLocation();
  return user?.email && admin ? (
    children
  ) : (
    <Navigate
      to={{
        pathname: "/",
      }}
      state={{ from: location }}
    ></Navigate>
  );
};

export default AdminRoute;
