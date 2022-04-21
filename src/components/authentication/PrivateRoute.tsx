import { useAuth } from "contexts";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({ children }: any) {
  const location = useLocation();
  const { authToken } = useAuth();
  return authToken ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

export { PrivateRoute };
