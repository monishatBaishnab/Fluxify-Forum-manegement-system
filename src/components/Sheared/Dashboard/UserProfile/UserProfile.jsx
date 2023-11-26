import { Button, Chip, Typography } from "@material-tailwind/react";
import { FaUserPen } from "react-icons/fa6";
import PropTypes from 'prop-types';
import { HiBadgeCheck } from "react-icons/hi";

const UserProfile = ({currentUser}) => {
    return (
        <div className="flex items-center gap-5 rounded-md">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-3">
                <img className="h-full w-full object-cover" src={currentUser?.image} alt={currentUser?.name} />
            </div>
            <div className="flex items-start flex-col space-y-2">
                <div>
                    <Chip color="blue" className="" value={currentUser?.badge} icon={<HiBadgeCheck className="text-xl" />} />
                </div>
                <div>
                    <Typography variant="small" className="font-medium text-blue-gray-600">Name</Typography>
                    <Typography variant="h4" className="font-medium text-blue-gray-900">{currentUser?.name}</Typography>
                </div>
                <div>
                    <Typography variant="small" className="font-medium text-blue-gray-600">Email</Typography>
                    <Typography className="text-blue-gray-600">{currentUser?.email}</Typography>
                </div>
                <Button variant="text" className="flex items-center gap-2 text-blue-500"><FaUserPen className="text-base" />Edit Pofile</Button>
            </div>
        </div>
    );
};

UserProfile.propTypes = {
    currentUser: PropTypes.object,
}

export default UserProfile;