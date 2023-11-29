import { useQuery } from "@tanstack/react-query";
import DashboardContainer from "../../../components/Sheared/Dashboard/DashboardContainer/DashboardContainer";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import FetchLoading from "../User/FetchLoading";
import { IconButton } from "@material-tailwind/react";
import toast from "react-hot-toast";
import DataTable from "react-data-table-component";
import { customStyles } from "../../../api/tableStyles";
import { FaTrashAlt } from "react-icons/fa";

const ReportedComments = () => {
    const axiosSecure = useAxiosSecure();
    const getComments = async () => {
        const res = await axiosSecure.get(`/comments?report=true`);
        return res.data;
    }

    const { data: reportedComments, isLoading, refetch } = useQuery({ queryKey: ['comments'], queryFn: getComments });

    const getDate = (row) => {
        const date = new Date(row?.date).toLocaleDateString();
        return date;
    }
    const handleDeleteComment = async (id) => {
        try {
            await axiosSecure.delete(`/comments/${id}`);
            toast.success("Comment deleted.");
            refetch();
        } catch (error) {
            toast.error("Comment cannot delete.");
            console.log(error);
        }
    }
    const columns = [
        {
            name: 'Feedback',
            selector: row => row?.feedback
        },
        {
            name: 'Date',
            selector: row => getDate(row)
        },
        {
            name: 'Action',
            selector: row => <IconButton onClick={() => handleDeleteComment(row?._id)} color="red"><FaTrashAlt className="text-xl" /></IconButton>
        }
    ];
    return (
        <DashboardContainer title='Reported Comments'>
            {
                isLoading ? <FetchLoading /> :
                    <DataTable data={reportedComments} columns={columns} customStyles={customStyles} pagination />
            }
        </DashboardContainer>
    );
};

export default ReportedComments;