import { Typography } from "@material-tailwind/react";
import logo from '../../../../assets/fluxify.png';
import SidebarItems from "../../SidebarItems/SidebarItems";
import { adminDashboardItems, usersDashboardItems } from "../../../../api/sidebarLists";
import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import useFetchUser from "../../../../hooks/useFetchUser";
import Skeleton from "react-loading-skeleton";

const Sidebar = () => {
    const { data: currentUser, isLoading } = useFetchUser();

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
                <div className="absolute left-0 right-0 bottom-0 py-2 bg-blue-50 border-t border-t-blue-100">
                    <Link to='/' className="flex items-center justify-center gap-2"><IoArrowBackOutline />Go to Home</Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;