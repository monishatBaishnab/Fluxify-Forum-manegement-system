import { Button, Textarea, Typography } from "@material-tailwind/react";
import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import PropTypes from 'prop-types';
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";
import { ImSpinner9 } from "react-icons/im";

const CommentBox = ({ postId, refetch }) => {
    const [commentText, setCommentText] = useState('');
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const [ loading, setLoading ]= useState(false);

    const handleComment = async () => {
        setLoading(true);
        const fetchUserId = await axiosSecure.get(`/users/${user?.email}`);
        const userId = fetchUserId?.data?._id;
        const userComment = {
            "comment": commentText,
            "user": userId,
            "post": postId
        }
        try {
            const res = await axiosSecure.post('/comments', userComment);
            console.log(res.data);
            refetch();
            toast.success('Commnet posted.');
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }
    return (
        <div className="space-y-3">
            <Typography variant="h5" className="font-medium text-blue-gray-700">Share your thoughts on this posts!</Typography>
            <Textarea onChange={(e) => setCommentText(e.target.value)} className=" !border-t-blue-gray-200 focus:!border-blue-gray-700 focus:!border-t-blue-gray-700" labelProps={{ className: "before:content-none after:content-none", }} />
            <Button onClick={handleComment} color="blue">{loading ? <ImSpinner9 className="animate-spin" /> : 'Post'}</Button>
        </div>
    );
};

CommentBox.propTypes = {
    postId: PropTypes.string,
    refetch: PropTypes.func,
}

export default CommentBox;