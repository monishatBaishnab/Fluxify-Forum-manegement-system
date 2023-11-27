import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useFetchAllPost = (page, offset, tag, sort) => {
    const axiosPublic = useAxiosPublic();
    // State for the current page and items per page
    const getPosts = async () => {
        const res = await axiosPublic.get(`/posts?page=${page}&offset=${offset}&tag=${tag}&sort=${sort}`);
        return res.data;
    }
    const { data, isLoading } = useQuery({ queryKey: ['posts', page, tag, sort], queryFn: getPosts });
    return { data, isLoading };
};

export default useFetchAllPost;