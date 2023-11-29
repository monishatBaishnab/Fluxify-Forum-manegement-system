import { Typography } from "@material-tailwind/react";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { FaRegComments } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { getDayAgo } from "../../../api/getDays";
import PostUser from "../../Sheared/Post/PostUser";
import useFetchCommentsByPostId from "../../../hooks/useFetchCommentsByPostId";

const PostCard = ({ post }) => {
    const { _id, title, tags, upvote, downvote, user, time, image } = post || {};
    const { data: comments } = useFetchCommentsByPostId(_id);

    const deffDay = getDayAgo(time);

    return (
        <div className="flex gap-5 p-5 bg-white rounded-lg">
            <div className="w-[56px] h-[56px] md:w-[156px] md:h-[156px] overflow-hidden">
                <img className="w-full h-full object-cover rounded-md" src={image} alt="" />
            </div>
            <div className="flex-1">
                <div className="flex flex-col justify-between">
                    <div className="mb-3">
                        <Link to={`/posts/${_id}`}><Typography variant="h5" className="font-medium transition-all hover:text-primary">{title.length > 45 ? title.slice(0, 45) : title}</Typography></Link>
                        <div className="flex items-center gap-2 flex-wrap my-2">
                            {tags.map(tag => <Typography key={tag} className="px-2 bg-[#EAEAEA] rounded-sm text-[#808080]" as='span'>{tag}</Typography>)}
                        </div>
                    </div>
                    <div className="flex items-end md:justify-between flex-wrap gap-2">
                        <PostUser user={user} deffDay={deffDay} />
                        <div className="flex gap-4 flex-wrap">
                            <Typography as='span' className="flex items-center gap-2 text-[#808080]"><FaRegComments /> {comments?.data?.length}</Typography>
                            <Typography as='span' className="flex items-center gap-2 text-[#808080]"><AiFillLike /> {upvote?.length > 0 ? upvote?.length : ''}</Typography>
                            <Typography as='span' className="flex items-center gap-2 text-[#808080]"><AiFillDislike /> {downvote?.length > 0 ? downvote?.length : ''}</Typography>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

PostCard.propTypes = {
    post: PropTypes.object,
}

export default PostCard;