import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import LoadingPage from "../pages/LoadingPage/LoadingPage";
import PropTypes from 'prop-types';

const PrivateRoute = ({children}) => {
    const {user, isLoading} = useAuth();
    const location = useLocation();

    if(isLoading){
        return <LoadingPage />
    }
    if(!user) {
        return <Navigate to='/signin' state={{from: location.pathname}} replace={true} />
    }
    return children;
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
}

export default PrivateRoute;