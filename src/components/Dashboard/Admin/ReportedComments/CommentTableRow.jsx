import { IconButton, Typography } from "@material-tailwind/react";
import PropTypes from 'prop-types';
import { FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const CommentTableRow = ({ item, refetch }) => {
    const date = new Date(item?.date).toLocaleDateString();
    const axiosSecure = useAxiosSecure();
    const handleDeleteComment = async () => {
        await axiosSecure.delete(`/comments/${item?._id}`);
        refetch();
        toast.success("Coment deleted.");
    }

    return (
        <tr>
            <td className='p-4 border-b border-blue-gray-50'>
                <Typography className="font-normal text-center text-blue-gray-700">
                    {item?.feedback}
                </Typography>
            </td>
            <td className='p-4 border-b border-blue-gray-50'>
                <Typography className="font-normal text-center text-blue-gray-700">
                    {date}
                </Typography>
            </td>
            <td className='p-4 border-b border-blue-gray-50'>
                <div className="flex justify-center gap-2">
                    <IconButton onClick={handleDeleteComment} color="red"><FaTrashAlt className="text-xl" /></IconButton>
                </div>
            </td>
        </tr>
    );
};

CommentTableRow.propTypes = {
    item: PropTypes.object,
    refetch: PropTypes.func,
}

export default CommentTableRow;