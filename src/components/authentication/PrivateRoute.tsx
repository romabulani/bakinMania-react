import { useAuth } from "contexts";
import { Navigate, useLocation } from "react-router-dom";

type PrivateRouteProps = {
  children: React.ReactNode;
};

function PrivateRoute({ children }: PrivateRouteProps) {
  const location = useLocation();
  const { authUser } = useAuth();
  return authUser ? (
    <>{children}</>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

export { PrivateRoute };
