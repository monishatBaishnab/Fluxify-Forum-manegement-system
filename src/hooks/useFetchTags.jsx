import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useFetchTags = () => {
    const axiosSecure = useAxiosSecure();
    const getTags = async () => {
        const res = await axiosSecure.get(`/post-tags`);
        return res.data;
    }

    const { data: postTags } = useQuery({ queryKey: ['post-tags'], queryFn: getTags});
    return postTags;
};

export default useFetchTags;