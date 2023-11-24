import { Outlet } from "react-router-dom";
import Navbar from "../components/Sheared/Navbar/Navbar";
import LeftSidebar from "../components/Sheared/Sidebar/LeftSidebar";
import RightSidebar from "../components/Sheared/Sidebar/RightSidebar";

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <div className="flex max-w-[1920px]">
                <LeftSidebar />
                <div className="flex-1 bg-[#FAFAFA]">
                    <Outlet />
                </div>
                <RightSidebar />
            </div>
        </div>
    );
};

export default MainLayout;