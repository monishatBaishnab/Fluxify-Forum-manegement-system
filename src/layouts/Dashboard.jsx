import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sheared/Dashboard/Sidebar/Sidebar";
import { Drawer, IconButton } from "@material-tailwind/react";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";

const Dashboard = () => {
    const [open, setOpen] = useState(false);
 
    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);
    return (
        <div>
            <div className="w-full flex items-center justify-end bg-white fixed top-0 left-0 right-0 z-40 py-5 container border-b lg:hidden">
                <IconButton onClick={openDrawer}><FaBars /></IconButton>
            </div>
            <div className="flex max-w-[1920px] mx-auto mt-16 lg:mt-0">
                <div className="w-[280px] hidden lg:inline-block">
                    <Sidebar />
                </div>
                <div className="bg-[#FAFAFA] min-h-screen w-full lg:w-[calc(100vw_-_280px)]">
                    <Outlet />
                </div>
            </div>
            <Drawer open={open} onClose={closeDrawer} className="w-[280px]" overlayProps={{ className: 'fixed' }}>
                <Sidebar />
            </Drawer>
        </div>
    );
};

export default Dashboard;