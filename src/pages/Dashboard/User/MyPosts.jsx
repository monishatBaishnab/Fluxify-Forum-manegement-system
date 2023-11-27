import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import PostTable from "../../../components/Sheared/Dashboard/MyPosts/PostTable";
import FetchLoading from "./FetchLoading";
import DashboardContainer from "../../../components/Sheared/Dashboard/DashboardContainer/DashboardContainer";

const MyPosts = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const getPosts = async () => {
        const res = await axiosSecure.get(`/posts?email=${user?.email}`);
        return res.data;
    }

    const { data, isLoading, refetch } = useQuery({ queryKey: ['myPost', user?.email], queryFn: getPosts, enabled: !!user?.email });

    return (

        <DashboardContainer title='My Post'>
            <div className="overflow-x-auto">
                {
                    isLoading ?
                        <FetchLoading />
                        :
                        <PostTable data={data} refetch={refetch} />}
            </div>
        </DashboardContainer>
    );
};

export default MyPosts;