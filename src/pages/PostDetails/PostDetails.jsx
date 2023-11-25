import { useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Button, Textarea, Typography } from "@material-tailwind/react";
import { getDayAgo } from "../../api/getDays";
import PostUser from "../../components/Sheared/Post/PostUser";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import LoadingPostDetails from "../../components/Home/PostDetails/LoadingPostDetails";

const PostDetails = () => {
    const axiosSecure = useAxiosSecure();
    const { id } = useParams();

    const getPost = async () => {
        const res = await axiosSecure.get(`/posts/${id}`);
        return res.data;
    }

    const { data: post, isLoading } = useQuery({ queryKey: ['post'], queryFn: getPost });
    const { title, description, tags, upvote, downvote, user, time, image } = post || {};
    // if (!isLoading) {
    //     console.log(title);
    // }
    const deffDay = getDayAgo(time);

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
                            {tags.map(tag => <Typography key={tag} className="px-2 bg-[#EAEAEA] rounded-sm text-[#808080]" as='span'>{tag}</Typography>)}
                        </div>
                        <Typography as='span' className="text-sm font-normal text-c-gray">{deffDay > 0 ? `${deffDay} days ago` : 'Today'} </Typography>
                    </div>
                    <Typography variant="paragraph" className="font-normal text-blue-gray-800">{description}</Typography>
                    <div className="flex items-end md:justify-between flex-wrap gap-2">
                        <PostUser user={user} deffDay={deffDay} />
                        <div className="flex gap-4 flex-wrap">
                            {/* <Typography as='span' className="flex items-center gap-2 text-[#808080]"><FaRegComments /> {comment}</Typography> */}
                            <Typography as='span' className="flex items-center gap-2 text-[#808080]"><button className="p-2 hover:text-light-blue-500 transition-all"><AiFillLike className="text-xl" /></button> {upvote}</Typography>
                            <Typography as='span' className="flex items-center gap-2 text-[#808080]"><button className="p-2 hover:text-light-blue-500 transition-all"><AiFillDislike className="text-xl" /></button> {downvote}</Typography>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <Typography variant="h5" className="font-medium text-blue-gray-700">Share Your Thoughts on Forum Posts!</Typography>
                        <Textarea className=" !border-t-blue-gray-200 focus:!border-blue-gray-700 focus:!border-t-blue-gray-700" labelProps={{ className: "before:content-none after:content-none", }} />
                        <Button color="blue">Post</Button>
                    </div>
                </div>}
        </div>
    );
};

export default PostDetails;