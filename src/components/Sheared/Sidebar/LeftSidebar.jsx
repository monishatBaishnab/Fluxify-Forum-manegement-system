import { List, Typography } from "@material-tailwind/react";
import SidebarItems from "./SidebarItems";

const LeftSidebar = () => {
    return (
        <div className="w-[280px] mt-[82px] fixed left-0 bg-white z-40 h-screen overflow-y-auto">
            <div>
                <Typography className="px-4 border-b py-3 text-center font-medium">Menu</Typography>
                <List className="p-0">
                    <SidebarItems />
                </List>
            </div>
        </div>
    );
};

export default LeftSidebar;