import { Button, Textarea, Typography } from "@material-tailwind/react";
import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import PropTypes from 'prop-types';

const CommentBox = ({postId, refetch}) => {
    const [commentText, setCommentText] = useState('');
    const axiosSecure = useAxiosSecure();

    const handleComment = async () => {
        const fetchUserId = await axiosSecure.get('/users/baishnabmonishat@gmail.com');
        const userId = fetchUserId?.data?._id;
        const userComment = {
            "comment": commentText,
            "user": userId,
            "post": postId
        }
        const res = await axiosSecure.post('/comments', userComment);
        console.log(res.data);
        setCommentText('');
        refetch();
    }
    return (
        <div className="space-y-3">
            <Typography variant="h5" className="font-medium text-blue-gray-700">Share your thoughts on this posts!</Typography>
            <Textarea defaultValue={commentText} onChange={(e) => setCommentText(e.target.value)} className=" !border-t-blue-gray-200 focus:!border-blue-gray-700 focus:!border-t-blue-gray-700" labelProps={{ className: "before:content-none after:content-none", }} />
            <Button onClick={handleComment} color="blue">Post</Button>
        </div>
    );
};

CommentBox.propTypes = {
    postId: PropTypes.string,
    refetch: PropTypes.func,
}

export default CommentBox;