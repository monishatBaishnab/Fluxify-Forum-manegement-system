import { useParams } from "react-router-dom";
import LoadingPostDetails from "../../components/Home/PostDetails/LoadingPostDetails";
import Details from "../../components/Home/PostDetails/Details";
import Comments from "../../components/Home/PostDetails/Comments";
import useFetchPost from "../../hooks/useFetchPost";

const PostDetails = () => {
    const { id } = useParams();
    const { post, isLoading, refetch } = useFetchPost(id);


    return (
        <div className="container py-10 min-h-[calc(100vh_-_82px)]">
            {
                isLoading ? <LoadingPostDetails />
                    :
                    <div>
                        <Details post={post} refetch={refetch} />
                        <Comments postId={post?._id} />
                    </div>
            }

        </div>
    );
};

export default PostDetails;