import { Button, Drawer, IconButton, List, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import logo from '../../../assets/fluxify.png'
import { LuUserPlus } from "react-icons/lu";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import SidebarItems from "../Sidebar/SidebarItems";
import { AiOutlineLogin } from "react-icons/ai";

const Navbar = () => {
    const [openDrower, setOpenDrower] = useState(false);
    const closeDrawer = () => setOpenDrower(!openDrower);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenDrower(false),
        );
    }, []);
    return (
        <div className="py-5 border-b">
            <div className="container flex items-center justify-between">
                <Link>
                    <Typography variant="h3" className="flex items-center gap-2 text-primary font-medium">
                        <img className="h-10" src={logo} alt="Fluxify" />
                        Fluxify
                    </Typography>
                </Link>
                <div className="flex gap-2">
                    <Link to='/signup'><Button className="bg-primary flex items-center gap-2 text-base font-normal capitalize py-2"><LuUserPlus className="text-lg" /> Join us</Button></Link>
                    <Link to='/signin'><Button className="bg-c-blue/20 text-c-blue flex items-center gap-2 text-base font-normal capitalize py-2"><AiOutlineLogin className="text-lg" /> Sign in </Button></Link>
                    <IconButton className="inline-block lg:hidden" onClick={() => setOpenDrower(!openDrower)} variant="text"><FaBars className="text-lg" /></IconButton>
                    
                </div>
            </div>
            <Drawer open={openDrower} onClose={closeDrawer} className="py-5" overlayProps={{ className: 'fixed' }}>
                <List className="p-0">
                    <SidebarItems />
                </List>
            </Drawer>
        </div>
    );
};

export default Navbar;