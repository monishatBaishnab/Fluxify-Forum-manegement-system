import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useFetchCommentsByPostId = ( postId ) => {
    const axiosSecure = useAxiosSecure();

    const getComments = async () => {
        const res = axiosSecure.get(`/comments?postId=${postId}`);
        return res;
    }
    const { data, isLoading, refetch } = useQuery({ queryKey: ['comments', postId], queryFn: getComments });
    return { data, isLoading, refetch };
};

export default useFetchCommentsByPostId;