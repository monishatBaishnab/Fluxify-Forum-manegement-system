import { List, Typography } from "@material-tailwind/react";
import SidebarItems from "./SidebarItems";

const LeftSidebar = () => {
    return (
        <div className="w-[280px] h-screen overflow-y-auto hidden lg:inline-block">
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