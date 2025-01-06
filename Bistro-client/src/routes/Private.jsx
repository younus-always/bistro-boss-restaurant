import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Loading";
import useAuth from "../hooks/useAuth";

const Private = ({ children }) => {
      const { user, loading } = useAuth();
      const location = useLocation();

      if (loading) {
            return <Loading />
      };

      if (user && user.email) {
            return children;
      };
      return <Navigate state={location.pathname} to='/signin'/>
}

export default Private;