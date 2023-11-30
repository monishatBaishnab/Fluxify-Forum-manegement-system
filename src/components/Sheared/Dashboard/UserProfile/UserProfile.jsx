import { Chip, Typography } from "@material-tailwind/react";
import PropTypes from 'prop-types';
import { HiBadgeCheck } from "react-icons/hi";
import useFetchPosts from "../../../../hooks/useFetchPosts";
import LoadinPost from "../../../Home/PostContainer/LoadinPost";
import PostContainer from "../../../Home/PostContainer/PostContainer";

const UserProfile = ({ currentUser }) => {
    const { data, isLoading } = useFetchPosts() || [];
    const recentPost = data?.data?.slice(0, 3);
    return (
        <div>
            <div className="flex items-center gap-5 rounded-md">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-3">
                    <img className="h-full w-full object-cover" src={currentUser?.image} alt={currentUser?.name} />
                </div>
                <div className="flex items-start flex-col space-y-2">
                    <div>
                        <Chip className={`${currentUser?.badge === 'Gold' ? 'bg-[#FFD700]' : 'bg-blue-500'}`} value={currentUser?.badge} icon={<HiBadgeCheck className="text-xl" />} />
                    </div>
                    <div>
                        <Typography variant="small" className="font-medium text-blue-gray-600">Name</Typography>
                        <Typography variant="h4" className="font-medium text-blue-gray-900">{currentUser?.name}</Typography>
                    </div>
                    <div>
                        <Typography variant="small" className="font-medium text-blue-gray-600">Email</Typography>
                        <Typography className="text-blue-gray-600">{currentUser?.email}</Typography>
                    </div>
                </div>
            </div>
            <Typography variant="h4" color="blue" className="mt-10 font-normal mb-2">Latest Three Posts</Typography>
            {isLoading ?
                    <LoadinPost /> :
                    <PostContainer posts={recentPost} />}
                {
                    data?.count === 0 &&
                    <div className="flex items-center justify-center flex-col">
                        <Typography variant="h4" className="font-medium text-blue-gray-700 ml-3">No data here!</Typography>
                    </div>
                }
        </div>
    );
};

UserProfile.propTypes = {
    currentUser: PropTypes.object,
}

export default UserProfile;