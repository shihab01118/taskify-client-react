import axios from "axios";

const axiosPublic = axios.create({
  baseURL: import.meta.env.VITE_apiURL,
});

const useAxiosSecure = () => {
  return axiosPublic;
};

export default useAxiosSecure;
