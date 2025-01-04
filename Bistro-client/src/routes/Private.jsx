import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom"
import { AuthContext } from "../providers/AuthProvider";
import Loading from "../components/Loading";

const Private = ({ children }) => {
      const { user, loading } = useContext(AuthContext);
      const location = useLocation();

      if (loading) {
            return <Loading />
      };

      console.log(location)
      if (user && user.email) {
            return children;
      };
      return <Navigate state={location.pathname} to='/signIn'></Navigate>
}

export default Private;