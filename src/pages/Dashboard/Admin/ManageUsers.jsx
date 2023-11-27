import { useQuery } from "@tanstack/react-query";
import DashboardContainer from "../../../components/Sheared/Dashboard/DashboardContainer/DashboardContainer";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import UsersTable from "../../../components/Dashboard/Admin/ManageUsers/UsersTable";
import FetchLoading from "../User/FetchLoading";

const ManageUsers = () => {
    const axiosSecure = useAxiosSecure();
    const getUsers = async () => {
        const res = await axiosSecure.get('/users');
        return res.data;
    }

    const {data, isLoading, refetch} = useQuery({queryKey: ['users'], queryFn: getUsers});

    return (
        <DashboardContainer title='Manage Uasers'>
            {
                isLoading ? <FetchLoading /> : <UsersTable refetch={refetch} data={data} />
            }
        </DashboardContainer>
    );
};

export default ManageUsers;