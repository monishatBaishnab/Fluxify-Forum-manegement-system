import useAuth from "../../../hooks/useAuth";
import { Typography } from "@material-tailwind/react";
import UserProfile from "../../../components/Sheared/Dashboard/UserProfile/UserProfile";
import ProfileSkeliton from "../../../components/Sheared/Dashboard/UserProfile/ProfileSkeliton";
import useFetchUser from "../../../hooks/useFetchUser";

const UserHome = () => {
    const { user } = useAuth();

    const { data: currentUser, isLoading } = useFetchUser();

    return (
        <div className="p-10">
            <div className="flex flex-col bg-white p-5">
                <Typography variant="h4" className="font-medium text-blue-500 mb-5">My Profile</Typography>
                {user === undefined || isLoading ?
                    <ProfileSkeliton /> :
                    <UserProfile currentUser={currentUser} />}
            </div>
        </div>
    );
};

export default UserHome;