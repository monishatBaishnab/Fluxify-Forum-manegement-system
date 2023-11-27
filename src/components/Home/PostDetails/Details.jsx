import { Button, Typography } from "@material-tailwind/react";
import PostUser from "../../Sheared/Post/PostUser";
import { FaShare } from "react-icons/fa";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import toast from "react-hot-toast";
import { getDayAgo } from "../../../api/getDays";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import PropTypes from 'prop-types';

const Details = ({ post, refetch }) => {
    const axiosSecure = useAxiosSecure();
    const { user: currentUser } = useAuth();


    const { _id, title, description, tags, upvote, downvote, user, time, image } = post || {};
    const deffDay = getDayAgo(time);

    console.log(upvote);

    const handleUpVote = async () => {
        const find = upvote.filter(user => user === currentUser.email);
        if (find?.length > 0) {
            return toast.error('You are alrady liked this post.');
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

    return (
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
        </div>
    );
};

Details.propTypes = {
    post: PropTypes.object,
    refetch: PropTypes.func,
}

export default Details;