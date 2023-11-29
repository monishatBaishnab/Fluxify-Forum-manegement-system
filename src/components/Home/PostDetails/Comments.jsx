import { Typography } from "@material-tailwind/react";
import PropTypes from 'prop-types';
import { ImSpinner2 } from "react-icons/im";
import Comment from "./Comment";
import CommentBox from "./CommentBox";
import useFetchCommentsByPostId from "../../../hooks/useFetchCommentsByPostId";

const Comments = ({ postId }) => {
    const { data, isLoading, refetch } = useFetchCommentsByPostId(postId);
    
    return (
        <div className="mt-5 p-5 bg-white">
            <CommentBox postId={postId} refetch={refetch} />
            <Typography variant="h4" className="mt-5">Comments</Typography>
            <div>
                {
                    isLoading ? <ImSpinner2 className="animate-spin" /> :
                        data?.data?.map(comment => <Comment key={comment._id} comment={comment} />)
                }
            </div>
        </div>
    );
};

Comments.propTypes = {
    postId: PropTypes.string,
    data: PropTypes.array,
    isLoading: PropTypes.bool,
    refetch: PropTypes.func,
}

export default Comments;