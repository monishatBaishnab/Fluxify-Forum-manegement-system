import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useFetchUser = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const getUser = async () => {
        const res = await axiosSecure.get(`/users/${user?.email}`);
        return res.data;
    }

    const { data, isLoading } = useQuery({ queryKey: ['user',], queryFn: getUser, enabled: !!user?.email });
    return { data, isLoading };
};

export default useFetchUser;