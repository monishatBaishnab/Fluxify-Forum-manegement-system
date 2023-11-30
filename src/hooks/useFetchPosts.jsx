import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useFetchPosts = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const getPosts = async () => {
        const res = await axiosSecure.get(`/posts?email=${user?.email}`);
        return res.data;
    }

    const { data, isLoading, refetch } = useQuery({ queryKey: ['myPost', user?.email], queryFn: getPosts, enabled: !!user?.email });
    return { data, isLoading, refetch};
};

export default useFetchPosts;