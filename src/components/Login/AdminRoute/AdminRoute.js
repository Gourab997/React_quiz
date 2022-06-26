import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../hook/useAuth";

const AdminRoute = ({ children }) => {
  const { user, isLoading, admin } = useAuth();
  if (!admin || isLoading) {
    <div class="spinner-grow text-warning" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>;
  }
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
