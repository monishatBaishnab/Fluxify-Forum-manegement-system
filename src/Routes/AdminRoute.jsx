import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import LoadingPage from "../pages/LoadingPage/LoadingPage";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import PropTypes from 'prop-types';
import toast from "react-hot-toast";

const AdminRoute = ({children}) => {
    const axiosSecure = useAxiosSecure();
    const { signOutUser } = useAuth();
    const getIsAdmin = async () => {
        const res = await axiosSecure.get('/is-admin');
        return res.data;
    }
    const { data: isAdmin, isLoading } = useQuery({ queryKey: ['isAdmin'], queryFn: getIsAdmin });
    if (isLoading) {
        return <LoadingPage />
    }
    if (!isAdmin) {
        signOutUser()
            .then(res => console.log(res))
            .catch(err => console.log(err));
        toast.error('Unauthorize access.')
        return <Navigate to='/signin' />
    }
    return children;
};

AdminRoute.propTypes = {
    children: PropTypes.node,
}

export default AdminRoute;