import axios from "axios"
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
      baseURL: 'http://localhost:4000'
})

const useAxiosSecure = () => {
      const { logOut } = useAuth();
      const navigate = useNavigate();

      axiosSecure.interceptors.request.use((confiq) => {
            // request interceptor to add authorization header for every secure call to the api
            const token = localStorage.getItem('access-token')
            // console.log('request by interceptors', token);
            confiq.headers.authorization = `Bearer ${token}`;
            return confiq;
      }, (error) => {
            return Promise.reject(error)
      });

      // Add a response interceptor 401 and 403
      axiosSecure.interceptors.response.use((response) => {

            return response;
      }, (error) => {
            const status = error.response.status;
            // for 401 or 403 status log out the user and move to login page
            if (status === 401 || status === 403) {
                  logOut();
                  navigate('/signin');
            }
            return Promise.reject(error);
      });


      return axiosSecure;
}

export default useAxiosSecure