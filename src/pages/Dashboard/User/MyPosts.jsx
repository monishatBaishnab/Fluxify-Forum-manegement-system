import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { Typography } from "@material-tailwind/react";
import PostTable from "../../../components/Sheared/Dashboard/MyPosts/PostTable";
import FetchLoading from "./FetchLoading";

const MyPosts = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const getPosts = async () => {
        const res = await axiosSecure.get(`/posts?email=${user?.email}`);
        return res.data;
    }

    const { data, isLoading, refetch } = useQuery({ queryKey: ['myPost'], queryFn: getPosts, enabled: !!user?.email });
 
    return (

        <div className="p-10">
            <div className="flex flex-col bg-white p-5">
                <Typography variant="h4" className="text-blue-500 mb-5">My Posts</Typography>
                <div className="overflow-x-auto">
                    {
                        isLoading ?
                            <FetchLoading />
                            :
                            <PostTable data={data} refetch={refetch} />}
                </div>
            </div>
        </div>
    );
};

export default MyPosts;