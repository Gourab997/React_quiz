import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../hook/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    <div class="spinner-grow text-warning" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  }

  return user?.email ? (
    children
  ) : (
    <Navigate
      to={{
        pathname: "/login",
      }}
      state={{ from: location }}
    ></Navigate>
  );
};

export default PrivateRoute;
