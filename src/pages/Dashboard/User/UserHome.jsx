import useAuth from "../../../hooks/useAuth";
import UserProfile from "../../../components/Sheared/Dashboard/UserProfile/UserProfile";
import ProfileSkeliton from "../../../components/Sheared/Dashboard/UserProfile/ProfileSkeliton";
import useFetchUser from "../../../hooks/useFetchUser";
import DashboardContainer from "../../../components/Sheared/Dashboard/DashboardContainer/DashboardContainer";

const UserHome = () => {
    const { user } = useAuth();

    const { data: currentUser, isLoading } = useFetchUser();

    return (
        <DashboardContainer title='My Profile'>
            {user === undefined || isLoading ?
                <ProfileSkeliton /> :
                <UserProfile currentUser={currentUser} />}
        </DashboardContainer>
    );
};

export default UserHome;