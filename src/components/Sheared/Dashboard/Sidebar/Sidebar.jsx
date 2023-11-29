import { Typography } from "@material-tailwind/react";
import logo from '../../../../assets/fluxify.png';
import SidebarItems from "../../SidebarItems/SidebarItems";
import { adminDashboardItems, usersDashboardItems } from "../../../../api/sidebarLists";
import { Link } from "react-router-dom";
import useFetchUser from "../../../../hooks/useFetchUser";
import Skeleton from "react-loading-skeleton";
import { PiSignOutBold } from "react-icons/pi";
import { TbHome } from "react-icons/tb";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const Sidebar = () => {
    const { signOutUser } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: currentUser, isLoading } = useFetchUser();
    const handleClick = async () => {
        await signOutUser();
        await axiosSecure.post('/remove-token');
    }

    return (
        <div className="fixed left-0 top-0 bottom-0 w-[280px] border-r">
            <div className="relative h-screen">
                <Typography variant="h3" className="flex items-center justify-center py-4 border-b gap-2 text-primary font-medium">
                    <img className="h-8" src={logo} alt="Fluxify" />
                    Fluxify
                </Typography>
                <div>
                    {
                        isLoading ?
                            <div>
                                <div className="w-full">
                                    <Skeleton count={4} height='40px' width='100%' />
                                </div>
                            </div>
                            :
                            <div className="overflow-x-auto">
                                {currentUser?.role === 'admin' && <SidebarItems items={adminDashboardItems} />}
                                <SidebarItems items={usersDashboardItems} />
                            </div>
                    }
                </div>
                <div className="absolute left-0 right-0 bottom-0">
                    <Link to='/' className="flex items-center justify-center gap-2 py-2 bg-blue-50 border-t border-t-blue-100 text-blue-500 hover:bg-blue-100 transition-all"><TbHome className="text-lg" />Go to Home</Link>
                    <Typography onClick={handleClick} className="flex items-center justify-center gap-2 font-normal cursor-pointer py-2 bg-red-50 border-t border-t-red-100 text-red-500 hover:bg-red-100 transition-all"><PiSignOutBold className="text-base" />Sign out</Typography>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;