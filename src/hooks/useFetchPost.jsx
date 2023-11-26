import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useFetchPost = (id) => {
    const axiosSecure = useAxiosSecure();
    const getPost = async () => {
        const res = await axiosSecure.get(`/posts/${id}`);
        return res.data;
    }
    const { data: post, isLoading, refetch } = useQuery({ queryKey: ['post'], queryFn: getPost });

    return { post, isLoading, refetch };
};

export default useFetchPost;