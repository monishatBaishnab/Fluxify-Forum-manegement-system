import axios from "axios";

const instance = axios.create({
    baseURL: ''
})
const axiosPublic = () => {
    return instance;
};

export default axiosPublic;