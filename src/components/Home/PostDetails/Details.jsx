import { Button, Typography } from "@material-tailwind/react";
import PostUser from "../../Sheared/Post/PostUser";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import toast from "react-hot-toast";
import { getDayAgo } from "../../../api/getDays";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import PropTypes from 'prop-types';
import { FacebookIcon, FacebookShareButton} from 'react-share';

const Details = ({ post, refetch }) => {
    const axiosSecure = useAxiosSecure();
    const { user: currentUser } = useAuth();

    const { _id, title, description, tags, upvote, downvote, user, time, image } = post || {};
    const deffDay = getDayAgo(time);

    const findUpvote = upvote?.filter(user => user === currentUser.email);
    const findDownvote = downvote?.filter(user => user === currentUser.email);

    const handleUpVote = async () => {
        let down='false';
        if (findUpvote?.length > 0) {
            return toast.error('You are alrady liked this post.');
        }
        if (findDownvote?.length > 0) {
            down='true';
        }

        const res = await axiosSecure.put(`/like/${_id}?user=${currentUser.email}&down=${down}`);
        refetch();
        if (!res?.data?.upvote) {
            toast.error('You are alrady liked this post.');
        }
    }

    const handleDownVote = async () => {
        let down='false';
        if (findDownvote?.length > 0) {
            return toast.error('You are alrady unliked this post.');
        }
        if (findUpvote?.length > 0) {
            down='true';
        }
        try {
            const res = await axiosSecure.put(`/unlike/${_id}?user=${currentUser.email}&down=${down}`);
            refetch();
            if (!res?.data?.downvote) {
                toast.error('You are alrady unliked this post.');
            }
            
        } catch (error) {
            console.log(error);
        }
    }

    const shareUrl = `https://fluxify-72def.firebaseapp.com/posts/${_id}`

    return (
        <div className="bg-white p-5 rounded-lg space-y-5">
            <Typography variant="h3" className="font-medium">{title}</Typography>
            <div className="h-[400px] w-full overflow-hidden rounded-md">
                <img className="w-full h-full object-cover" src={image} alt="" />
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 flex-wrap my-2">
                    {tags?.map(tag => <Typography key={tag} className="px-2 bg-[#EAEAEA] rounded-sm text-[#808080]" as='span'>{tag}</Typography>)}
                </div>
                <Typography as='span' className="text-sm font-normal text-c-gray">{deffDay > 0 ? `${deffDay} days ago` : 'Today'} </Typography>
            </div>
            <Typography variant="paragraph" className="font-normal text-blue-gray-800">{description}</Typography>
            <div className="flex items-end md:justify-between flex-wrap gap-2">
                <PostUser user={user} deffDay={deffDay} />
                <div className="flex gap-4 flex-wrap">
                    <Button onClick={handleUpVote} color="blue" size="sm" className="flex items-center gap-2"><AiFillLike className="text-xl" />{upvote?.length > 0 ? upvote?.length : ''}</Button>
                    <Button onClick={handleDownVote} color="amber" size="sm" className="flex items-center gap-2"><AiFillDislike className="text-xl" />{downvote?.length > 0 ? downvote?.length : ''}</Button>
                   
                    <FacebookShareButton
                        url={shareUrl}
                        hashtag="#fluxify"
                    >
                        <FacebookIcon size={40} round />
                    </FacebookShareButton>
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