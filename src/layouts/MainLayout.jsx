import { Outlet } from "react-router-dom";
import Navbar from "../components/Sheared/Navbar/Navbar";
import LeftSidebar from "../components/Sheared/Sidebar/LeftSidebar";
import RightSidebar from "../components/Sheared/Sidebar/RightSidebar";

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <div className="flex max-w-[1920px] ">
                <div className="w-[280px] hidden lg:inline-block">
                    <LeftSidebar />
                </div>
                <div className="flex-1 bg-[#FAFAFA] mt-[82px]">
                    <Outlet />
                </div>
                <div className="w-[280px] hidden lg:inline-block">
                    <RightSidebar />
                </div>
            </div>
        </div>
    );
};

export default MainLayout;