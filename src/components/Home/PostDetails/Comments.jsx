import { Typography } from "@material-tailwind/react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import PropTypes from 'prop-types';
import { useQuery } from "@tanstack/react-query";
import { ImSpinner2 } from "react-icons/im";
import Comment from "./Comment";
import CommentBox from "./CommentBox";

const Comments = ({postId}) => {
    const axiosSecure = useAxiosSecure();

    const getComments = async () => {
        const res = axiosSecure.get(`/comments?postId=${postId}`);
        return res;
    }
    const {data, isLoading, refetch} = useQuery({queryKey: ['comments'], queryFn: getComments});


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
}

export default Comments;