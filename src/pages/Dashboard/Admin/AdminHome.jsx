import DashboardContainer from "../../../components/Sheared/Dashboard/DashboardContainer/DashboardContainer";
import ProfileSkeliton from "../../../components/Sheared/Dashboard/UserProfile/ProfileSkeliton";
import UserProfile from "../../../components/Sheared/Dashboard/UserProfile/UserProfile";
import useAuth from "../../../hooks/useAuth";
import useFetchUser from "../../../hooks/useFetchUser";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import FetchLoading from "../User/FetchLoading";
import StatePie from "../../../components/Dashboard/Admin/AdminHome/StatePie";
import AdminStates from "../../../components/Home/PostDetails/AdminStates";
import AddTag from "../../../components/Dashboard/Admin/AdminHome/AddTag";

const AdminHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: currentUser, isLoading } = useFetchUser();

    const getAdminState = async () => {
        const res = await axiosSecure.get('/admin-states');
        return res.data;
    }

    const { data, isLoading: staLoading } = useQuery({ queryKey: ['states'], queryFn: getAdminState });
    let chartData;
    if (!isLoading) {
        chartData = Object.entries(data).map(([name, uv]) => ({
            name,
            uv: uv || 0,
        }));
    }

    return (
        <DashboardContainer title='Admin Profile'>
            {
                staLoading ? <FetchLoading />
                    :
                    <AdminStates data={data} />
            }
            {user === undefined || isLoading ?
                <ProfileSkeliton />
                :
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <UserProfile currentUser={currentUser} />
                    <StatePie chartData={chartData} />
                </div>
            }
            <div>
                <AddTag />
            </div>
        </DashboardContainer>
    );
};

export default AdminHome;