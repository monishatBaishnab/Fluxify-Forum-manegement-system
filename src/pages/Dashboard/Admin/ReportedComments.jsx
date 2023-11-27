import { useQuery } from "@tanstack/react-query";
import DashboardContainer from "../../../components/Sheared/Dashboard/DashboardContainer/DashboardContainer";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import AdminTableBody from "../../../components/Sheared/Dashboard/AdminTable/AdminTableBody";
import CommentTableRow from "../../../components/Dashboard/Admin/ReportedComments/CommentTableRow";
import FetchLoading from "../User/FetchLoading";

const ReportedComments = () => {
    const axiosSecure = useAxiosSecure();
    const getComments = async () => {
        const res = await axiosSecure.get(`/comments?report=true`);
        return res.data;
    }

    const { data: reportedComments, isLoading, refetch } = useQuery({ queryKey: ['comments'], queryFn: getComments });

    const tableHead = ['Feedback', "Commenter", 'Take Action']
    return (
        <DashboardContainer title='Reported Comments'>
            {
                isLoading ? <FetchLoading /> :
                    <AdminTableBody tableHead={tableHead}>
                        {
                            reportedComments?.map(item => <CommentTableRow key={item?._id} refetch={refetch} item={item} />)
                        }
                    </AdminTableBody>
            }
        </DashboardContainer>
    );
};

export default ReportedComments;