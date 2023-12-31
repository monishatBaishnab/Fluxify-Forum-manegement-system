import { Badge, Button, Drawer, IconButton, List, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import logo from '../../../assets/fluxify.png'
import { LuUserPlus } from "react-icons/lu";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineLogin } from "react-icons/ai";
import Profile from "./Profile";
import useAuth from "../../../hooks/useAuth";
import SidebarItems from "../SidebarItems/SidebarItems";
import { usersItems } from "../../../api/sidebarLists";
import { IoNotifications } from "react-icons/io5";
import useFetchAnnoucements from "../../../hooks/useFetchAnnoucements";

const Navbar = () => {
    const [openDrower, setOpenDrower] = useState(false);
    const closeDrawer = () => setOpenDrower(!openDrower);
    const { user } = useAuth();

    const { annoucements } = useFetchAnnoucements();
    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenDrower(false),
        );
    }, []);
    return (
        <div className="py-5 border-b fixed top-0 left-0 right-0 bg-white z-40">
            <div className="container flex items-center justify-between">
                <Link>
                    <Typography variant="h3" className="flex items-center gap-2 text-primary font-medium">
                        <img className="h-10" src={logo} alt="Fluxify" />
                        Fluxify
                    </Typography>
                </Link>
                <div className="flex items-center gap-3">
                    <Badge content={annoucements?.length}>
                        <div className="p-2 bg-blue-100 cursor-pointer transition-all rounded-full text-blue-500">
                            <IoNotifications className="text-xl" />
                        </div>
                    </Badge>
                    {user === null ?
                        <div className="hidden md:flex items-center gap-2">
                            <Link to='/signin'>
                                <Button className="bg-primary flex items-center gap-2 text-base font-normal capitalize py-2"><LuUserPlus className="text-lg" /> Join us</Button>
                            </Link>
                            <Link to='/signup'>
                                <Button className="bg-c-blue/20 text-c-blue flex items-center gap-2 text-base font-normal capitalize py-2"><AiOutlineLogin className="text-lg" /> Sign up </Button>
                            </Link>
                        </div>
                        :
                        <Profile />}
                    <IconButton className="inline-block lg:hidden" onClick={() => setOpenDrower(!openDrower)} variant="text"><FaBars className="text-lg" /></IconButton>
                </div>
            </div>
            <Drawer open={openDrower} onClose={closeDrawer} className="py-5" overlayProps={{ className: 'fixed' }}>
                <List className="p-0">
                    <SidebarItems items={usersItems} />
                </List>
                {user === null &&
                    <div className="flex items-center justify-center gap-2 absolute bottom-5 left-0 right-0 md:hidden">
                        <Link to='/signin'><Button className="bg-primary flex items-center gap-2 text-base font-normal capitalize py-2"><LuUserPlus className="text-lg" /> Join us</Button></Link>
                        <Link to='/signup'><Button className="bg-c-blue/20 text-c-blue flex items-center gap-2 text-base font-normal capitalize py-2"><AiOutlineLogin className="text-lg" /> Sign up </Button></Link>
                    </div>
                }
            </Drawer>
        </div>
    );
};

export default Navbar;