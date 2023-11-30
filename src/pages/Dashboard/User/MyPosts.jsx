import FetchLoading from "./FetchLoading";
import DashboardContainer from "../../../components/Sheared/Dashboard/DashboardContainer/DashboardContainer";
import PostTable from "../../../components/Dashboard/User/MyPosts/PostTable";
import useFetchPosts from "../../../hooks/useFetchPosts";

const MyPosts = () => {
    const { data, isLoading, refetch } = useFetchPosts();

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