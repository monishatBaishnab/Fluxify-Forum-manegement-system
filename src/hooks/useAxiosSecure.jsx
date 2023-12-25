import axios from "axios";
import useAuth from "./useAuth";
import toast from "react-hot-toast";

const instance = axios.create({
    baseURL: 'https://fluxify-server.vercel.app',
    withCredentials: true
})
const useAxiosSecure = () => {
    const { user, signOutUser } = useAuth() || {};
    if (user) {
        instance.interceptors.response.use(config => {
            return config;
        }, async error => {
            if (error?.response?.status === 401 || error?.response?.status === 404) {
                await signOutUser();
                console.log('error from axios interseptors.');
                toast.error('Unauthorize access.');
            }
        })
    }

    return instance;
};

export default useAxiosSecure;