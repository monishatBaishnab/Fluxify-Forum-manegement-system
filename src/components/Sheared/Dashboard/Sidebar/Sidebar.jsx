import { Button, ButtonGroup, Typography } from "@material-tailwind/react";
import logo from '../../../../assets/fluxify.png';
import SidebarItems from "../../SidebarItems/SidebarItems";
import { usersDashboardItems } from "../../../../api/sidebarLists";
import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";

const Sidebar = () => {
    return (
        <div className="fixed left-0 top-0 bottom-0 w-[280px] border-r">
            <div className="relative h-screen">
                <Typography variant="h3" className="flex items-center justify-center py-4 border-b gap-2 text-primary font-medium">
                    <img className="h-8" src={logo} alt="Fluxify" />
                    Fluxify
                </Typography>
                <div className="flex justify-center py-4">
                    <ButtonGroup size="sm" color="blue">
                        <Button className="bg-blue-500 shadow-none hover:shadow-none">User</Button>
                        <Button className="bg-blue-50 text-blue-600 shadow-none hover:shadow-none">User</Button>
                    </ButtonGroup>
                </div>
                <div>
                    <SidebarItems items={usersDashboardItems} />
                </div>
                <div className="absolute left-0 right-0 bottom-0 py-2 bg-blue-50 border-t border-t-blue-100">
                    <Link to='/' className="flex items-center justify-center gap-2"><IoArrowBackOutline />Go to Home</Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;