import axios from "axios"

const axiosSecure = axios.create({
      baseURL: 'http://localhost:4000'
})

const useAxiosSecure = () => {
      return axiosSecure;
}

export default useAxiosSecure