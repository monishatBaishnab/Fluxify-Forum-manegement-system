import { Typography } from "@material-tailwind/react";
import { FaComments, FaThList, FaUsers } from "react-icons/fa";
import PropTypes from 'prop-types';

const AdminStates = ({data}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            <div className="p-5 bg-teal-50 flex items-center justify-center flex-col rounded-md">
                <FaUsers className="text-6xl text-teal-500 mb-2" />
                <Typography variant="h6" className="text-teal-500 font-normal">Total Users</Typography>
                <Typography variant="h4" className="text-teal-500">{data?.users}</Typography>
            </div>
            <div className="p-5 bg-red-50 flex items-center justify-center flex-col rounded-md">
                <FaComments className="text-6xl text-red-500 mb-2" />
                <Typography variant="h6" className="text-red-500 font-normal">Total Comments</Typography>
                <Typography variant="h4" className="text-red-500">{data?.comments}</Typography>
            </div>
            <div className="p-5 bg-blue-50 flex items-center justify-center flex-col rounded-md">
                <FaThList className="text-6xl text-blue-500 mb-2" />
                <Typography variant="h6" className="text-blue-500 font-normal">Total Post</Typography>
                <Typography variant="h4" className="text-blue-500">{data?.posts}</Typography>
            </div>
        </div>
    );
};

AdminStates.propTypes = {
    data: PropTypes.object,
}

export default AdminStates;