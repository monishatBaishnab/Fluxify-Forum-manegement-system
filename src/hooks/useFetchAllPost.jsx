import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useFetchAllPost = (page, offset, tag) => {
    const axiosPublic = useAxiosPublic();
    // State for the current page and items per page
    const getPosts = async () => {
        const res = await axiosPublic.get(`/posts?page=${page}&offset=${offset}&tag=${tag}`);
        return res.data;
    }
    const { data, isLoading } = useQuery({ queryKey: ['posts', page, tag], queryFn: getPosts });
    return { data, isLoading };
};

export default useFetchAllPost;