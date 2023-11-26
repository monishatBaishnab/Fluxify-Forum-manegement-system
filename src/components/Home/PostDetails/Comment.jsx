import { Typography } from "@material-tailwind/react";
import { FaRegComments, FaRegUser } from "react-icons/fa";
import PropTypes from 'prop-types';

const Comment = ({comment}) => {
    return (
        <div className="my-4 space-y-1">
            <Typography variant="h6" className="flex items-center font-medium gap-1 text-sm text-blue-gray-500"><FaRegUser />{comment?.user?.name}</Typography>
            <Typography className="flex gap-2 text-blue-gray-600"><span><FaRegComments className="mt-0.5" /></span><span className="text-sm">{comment?.comment}</span></Typography>
        </div>
    );
};

Comment.propTypes = {
    comment: PropTypes.object,
}

export default Comment;