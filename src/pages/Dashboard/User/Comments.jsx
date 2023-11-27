import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import CommentTable from "../../../components/Dashboard/User/Comments/CommentTable";
import FetchLoading from "./FetchLoading";
import DashboardContainer from "../../../components/Sheared/Dashboard/DashboardContainer/DashboardContainer";

const Comments = () => {
    const axiosSecure = useAxiosSecure();
    const { id } = useParams();
    const getComments = async () => {
        const res = await axiosSecure.get(`/comments?postId=${id}`);
        return res.data;
    }
    const { data, isLoading, refetch } = useQuery({ queryKey: ['comments', id], queryFn: getComments, enabled: !!id });
    return (
        <DashboardContainer title='Comments'>
            {
                isLoading ?
                    <FetchLoading />
                    :
                    <CommentTable data={data} refetch={refetch} />
            }
        </DashboardContainer>
    );
};

export default Comments;