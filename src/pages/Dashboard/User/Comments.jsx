import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Typography } from "@material-tailwind/react";
import CommentTable from "../../../components/Dashboard/User/Comments/CommentTable";
import FetchLoading from "./FetchLoading";

const Comments = () => {
    const axiosSecure = useAxiosSecure();
    const { id } = useParams();
    const getComments = async () => {
        const res = await axiosSecure.get(`/comments?postId=${id}`);
        return res.data;
    }
    const { data, isLoading, refetch } = useQuery({ queryKey: ['comments'], queryFn: getComments, enabled: !!id });
    return (
        <div className="p-10">
            <div className="flex flex-col bg-white p-5">
                <Typography variant="h4" className="text-blue-500 mb-5">My Posts</Typography>
                {
                    isLoading ?
                        <FetchLoading />
                        :
                        <CommentTable data={data} refetch={refetch} />
                }
            </div>
        </div>
    );
};

export default Comments;