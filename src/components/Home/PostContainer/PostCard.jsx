import { Typography } from "@material-tailwind/react";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
// import { FaRegComments } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const PostCard = ({post}) => {
    const {_id, title, tags, upvote, downvote, user, time, image} = post || {};
    const getDayAgo = (targetDate) => {
        const currentDate = new Date();
        const targetDateTime = new Date(targetDate).getTime();
        const currentDateTime = currentDate.getTime();
        const deff = currentDateTime - targetDateTime;
        const deffDays = Math.floor(deff / (24 * 60 * 60 * 1000));
        return deffDays;
    }
    const deffDay = getDayAgo(time);

    return (
        <div className="flex gap-5 p-5 bg-white rounded-lg">
            <div className="w-[56px] h-[56px] md:w-[156px] md:h-[156px] overflow-hidden">
                <img className="w-full h-full object-cover rounded-md" src={image} alt="" />
            </div>
            <div className="flex-1">
                <div className="flex flex-col justify-between">
                    <div className="mb-3">
                        <Link to={`/posts/${_id}`}><Typography variant="h5" className="font-medium">{title.length > 45 ? title.slice(0, 45) : title }</Typography></Link>
                        <div className="flex items-center gap-2 my-2">
                            {tags.map(tag => <Typography key={tag} className="px-2 bg-[#EAEAEA] rounded-sm text-[#808080]" as='span'>{tag}</Typography>)}
                        </div>
                    </div>
                    <div className="flex items-end md:justify-between flex-wrap gap-2">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full overflow-hidden">
                                <img className="h-full w-full object-cover" src={user.image} alt={user.name} />
                            </div>
                            <div>
                                <Typography variant="h6" className="font-medium whitespace-nowrap">{user.name}</Typography>
                                <Typography as='span' className="text-sm text-c-gray">{deffDay > 0 ? `${deffDay} days ago` : 'Today'} </Typography>
                            </div>
                        </div>
                        <div className="flex gap-4 flex-wrap">
                            {/* <Typography as='span' className="flex items-center gap-2 text-[#808080]"><FaRegComments /> {comment}</Typography> */}
                            <Typography as='span' className="flex items-center gap-2 text-[#808080]"><AiFillLike /> {upvote}</Typography>
                            <Typography as='span' className="flex items-center gap-2 text-[#808080]"><AiFillDislike /> {downvote}</Typography>
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