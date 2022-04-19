import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute() {
  const location = useLocation();
  return <Navigate to="/login" state={{ from: location }} replace />;
}

export { PrivateRoute };
