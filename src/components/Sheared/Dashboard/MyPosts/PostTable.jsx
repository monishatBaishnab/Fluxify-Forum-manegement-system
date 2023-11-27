import { IconButton, Typography } from "@material-tailwind/react";
import { FaComments, FaTrash } from "react-icons/fa";
import PropTypes from 'prop-types';
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const PostTable = ({ data, refetch }) => {
    const TABLE_HEAD = ["Title", "Like", "Dislike", "Action"];
    const axiosSecure = useAxiosSecure();

    const handleDelete = (id) => {
        Swal.fire({
            icon: 'question',
            title: "Do you want to delete the post?",
            showCancelButton: true,
            confirmButtonText: "Delete",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axiosSecure.delete(`/posts/${id}`);
                    refetch()
                    toast.success('Post deleted.');
                } catch (error) {
                    toast.error('Post delete faild.');
                }
            }
        });
    }

    return (
        <table className="w-full min-w-max table-auto text-left">
            <thead>
                <tr>
                    {TABLE_HEAD.map((head) => (
                        <th
                            key={head}
                            className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                        >
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal leading-none opacity-70 text-center"
                            >
                                {head}
                            </Typography>
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {
                    data?.data?.map((post, index) => {
                        const isLast = index === data.length - 1;
                        const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
                        return (
                            <tr key={post?._id}>
                                <td className={classes}>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal text-center"
                                    >
                                        {post?.title?.length > 45 ? post?.title.slice(0, 45) + '...' : post?.title}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal text-center"
                                    >
                                        {post?.upvote?.length}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal text-center"
                                    >
                                        {post?.downvote?.length}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <div className="flex gap-2 justify-center">
                                        <IconButton onClick={() => handleDelete(post?._id)} color="red"> <FaTrash className="text-lg" /> </IconButton>
                                        <Link to={`/dashboard/comments/${post?._id}`}><IconButton color="green"> <FaComments className="text-lg" /> </IconButton></Link>
                                    </div>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
};

PostTable.propTypes = {
    data: PropTypes.object,
    refetch: PropTypes.func,
}

export default PostTable;