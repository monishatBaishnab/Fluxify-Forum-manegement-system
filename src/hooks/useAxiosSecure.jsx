import axios from "axios";
import useAuth from "./useAuth";

const instance = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
})
const useAxiosSecure = () => {
    const { user, signOutUser } = useAuth() || {};
    if (user) {
        instance.interceptors.response.use(config => {
            return config;
        }, async error => {
            if(error.response.status === 401 || error.response.status === 404){
                await signOutUser();
            }
        })
    }

    return instance;
};

export default useAxiosSecure;