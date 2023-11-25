import { useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingPostDetails from "../../components/Home/PostDetails/LoadingPostDetails";
import Details from "../../components/Home/PostDetails/Details";
import Comments from "../../components/Home/PostDetails/Comments";

const PostDetails = () => {
    const axiosSecure = useAxiosSecure();
    const { id } = useParams();
    const getPost = async () => {
        const res = await axiosSecure.get(`/posts/${id}`);
        return res.data;
    }
    const { data: post, isLoading, refetch } = useQuery({ queryKey: ['post'], queryFn: getPost });



    return (
        <div className="container py-10 min-h-[calc(100vh_-_82px)]">
            {
                isLoading ? <LoadingPostDetails />
                    :
                    <Details post={post} refetch={refetch} />
            }

            <Comments postId={post?._id} />
        </div>
    );
};

export default PostDetails;