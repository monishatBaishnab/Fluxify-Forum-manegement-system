import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Typography } from "@material-tailwind/react";
import CommentTable from "../../../components/Dashboard/User/Comments/CommentTable";

const Comments = () => {
    const axiosSecure = useAxiosSecure();
    const {id} = useParams();
    console.log(id);
    console.log(id);
    const getComments = async() => {
        const res = await axiosSecure.get(`/comments?postId=${id}`);
        return res.data; 
    }
    const {data, isLoading} = useQuery({queryKey: ['comments'], queryFn: getComments});
    if(!isLoading){
        console.log(data);
    }

    return (
        <div className="p-10">
            <div className="flex flex-col bg-white p-5">
                <Typography variant="h4" className="text-blue-500 mb-5">My Posts</Typography>
                <CommentTable data={data} />
            </div>
        </div>
    );
};

export default Comments;