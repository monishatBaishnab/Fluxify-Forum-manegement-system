import {  IconButton, } from "@material-tailwind/react";
import { FaComments, FaTrash } from "react-icons/fa";
import PropTypes from 'prop-types';
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import { customStyles } from "../../../../api/tableStyles";

const PostTable = ({ data, refetch }) => {
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

   

    const columns = [
        {
            name: 'Title',
            selector: row => row.title
        },
        {
            name: 'Upvote',
            selector: row => row.upvote.length
        },
        {
            name: 'Downvote',
            selector: row => row.downvote.length
        },
        {
            name: 'Action',
            cell: row =>
                <div className="flex gap-2 justify-center">
                    <IconButton onClick={() => handleDelete(row?._id)} color="red"> <FaTrash className="text-lg" /> </IconButton>
                    <Link to={`/dashboard/comments/${row?._id}`}><IconButton color="green"> <FaComments className="text-lg" /> </IconButton></Link>
                </div>
        }
    ];

    return (
        <div>
            <DataTable data={data?.data} columns={columns} customStyles={customStyles} pagination />
        </div>
    );
};

PostTable.propTypes = {
    data: PropTypes.object,
    refetch: PropTypes.func,
}

export default PostTable;