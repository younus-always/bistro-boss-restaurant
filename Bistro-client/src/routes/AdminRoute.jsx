import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin"
import useAuth from "../hooks/useAuth";
import Loading from "../components/Loading";

const AdminRoute = ({ children }) => {
      const { user, loading } = useAuth();
      const [isAdmin, isAdminLoading] = useAdmin();
      const location = useLocation();

      if (loading || isAdminLoading) {
            return <Loading />
      };

      if (user && isAdmin) {
            return children
      };
      return <Navigate to='signin' state={location.pathname} />

}

export default AdminRoute