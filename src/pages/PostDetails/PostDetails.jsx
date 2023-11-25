import { useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Button, Textarea, Typography, } from "@material-tailwind/react";
import { getDayAgo } from "../../api/getDays";
import PostUser from "../../components/Sheared/Post/PostUser";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import LoadingPostDetails from "../../components/Home/PostDetails/LoadingPostDetails";
import useAuth from "../../hooks/useAuth";
import { FaShare } from "react-icons/fa";
import toast from "react-hot-toast";
import { useState } from "react";

const PostDetails = () => {
    const axiosSecure = useAxiosSecure();
    const { id } = useParams();
    const { user: currentUser } = useAuth();
    const [commentText, setCommentText] = useState('');

    const getPost = async () => {
        const res = await axiosSecure.get(`/posts/${id}`);
        return res.data;
    }
    const { data: post, isLoading, refetch } = useQuery({ queryKey: ['post'], queryFn: getPost });

    const { _id, title, description, tags, upvote, downvote, user, time, image } = post || {};
    const deffDay = getDayAgo(time);

    const handleUpVote = async () => {
        const find = upvote.filter(user => user === currentUser.email);
        if (find?.length > 0) {
            return toast.error('You are alrady unliked this post.');
        }
        
        const res = await axiosSecure.put(`/like/${_id}?user=${currentUser.email}`);
        refetch();
        if (!res?.data?.upvote) {
            toast.error('You are alrady liked this post.');
        }
    }

    const handleDownVote = async () => {
        const find = downvote.filter(user => user === currentUser.email);
        if (find?.length > 0) {
            return toast.error('You are alrady unliked this post.');
        }
        const res = await axiosSecure.put(`/unlike/${_id}?user=${currentUser.email}`);
        refetch();
        if (!res?.data?.downvote) {
            toast.error('You are alrady unliked this post.');
        }
    }

    const handleComment = async () => {
        const fetchUserId = await axiosSecure.get('/users/baishnabmonishat@gmail.com');
        const userId = fetchUserId?.data?._id;
        // console.log(fetchUserId);
        const userComment = {
            "comment": commentText,
            "user": userId,
            "post": _id
        }
        const res = await axiosSecure.post('/comments', userComment);
        console.log(res.data);
    }

    return (
        <div className="container py-10 min-h-[calc(100vh_-_82px)]">
            {isLoading ? <LoadingPostDetails /> :
                <div className="bg-white p-5 rounded-lg space-y-5">
                    <Typography variant="h3" className="font-medium">{title}</Typography>
                    <div className="h-[400px] w-full overflow-hidden rounded-md">
                        <img className="w-full h-full object-cover" src={image} alt="" />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 my-2">
                            {tags?.map(tag => <Typography key={tag} className="px-2 bg-[#EAEAEA] rounded-sm text-[#808080]" as='span'>{tag}</Typography>)}
                        </div>
                        <Typography as='span' className="text-sm font-normal text-c-gray">{deffDay > 0 ? `${deffDay} days ago` : 'Today'} </Typography>
                    </div>
                    <Typography variant="paragraph" className="font-normal text-blue-gray-800">{description}</Typography>
                    <div className="flex items-end md:justify-between flex-wrap gap-2">
                        <PostUser user={user} deffDay={deffDay} />
                        <div className="flex gap-4 flex-wrap">
                            {/* <Typography as='span' className="flex items-center gap-2 text-[#808080]"><FaRegComments /> {comment}</Typography> */}
                            <Button onClick={handleUpVote} color="blue" size="sm" className="flex items-center gap-2"><AiFillLike className="text-xl" />{upvote?.length > 0 ? upvote?.length : ''}</Button>
                            <Button onClick={handleDownVote} color="amber" size="sm" className="flex items-center gap-2"><AiFillDislike className="text-xl" />{downvote?.length > 0 ? downvote?.length : ''}</Button>
                            <Button color="green" size="sm" className="flex items-center gap-2"><FaShare className="text-xl" /></Button>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <Typography variant="h5" className="font-medium text-blue-gray-700">Share Your Thoughts on Forum Posts!</Typography>
                        <Textarea onChange={(e) => setCommentText(e.target.value)} className=" !border-t-blue-gray-200 focus:!border-blue-gray-700 focus:!border-t-blue-gray-700" labelProps={{ className: "before:content-none after:content-none", }} />
                        <Button onClick={handleComment} color="blue">Post</Button>
                    </div>
                </div>}
        </div>
    );
};

export default PostDetails;