import { Avatar, Button, Menu, MenuHandler, MenuItem, MenuList, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { FaRegUser } from "react-icons/fa";
import { PiSignOutBold } from "react-icons/pi";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
const Profile = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, signOutUser } = useAuth();
    const axiosSecure = useAxiosSecure();

    const handleClick = async () => {
        setIsMenuOpen(false);
        await signOutUser();
        await axiosSecure.post('/remove-token');
    }

    return (
        <div>
            <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
                <MenuHandler>
                    <Button
                        variant="text"
                        color="blue-gray"
                        className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
                    >
                        <Avatar
                            variant="circular"
                            size="sm"
                            alt="tania andrew"
                            className="border border-gray-900 p-0.5"
                            src={user?.photoURL}
                        />
                    </Button>
                </MenuHandler>
                <MenuList className="p-1">
                    <Link to='/dashboard/user-profile'>
                        <MenuItem>
                            <Typography
                                as="span"
                                variant="small"
                                className="font-normal flex items-center gap-2"
                                color="inherit"
                            >
                                <RxDashboard className="text-base" /> Dashboard
                            </Typography>
                        </MenuItem>
                    </Link>
                    <Link to='/dashboard/user-profile'>
                        <MenuItem>
                            <Typography
                                as="span"
                                variant="small"
                                className="font-normal flex items-center gap-2"
                                color="inherit"
                            >
                                <FaRegUser className="text-base" /> Profile
                            </Typography>
                        </MenuItem>
                    </Link>
                    <MenuItem className="hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10">
                        <Typography
                            onClick={handleClick}
                            as="span"
                            variant="small"
                            className="font-normal flex items-center gap-2"
                            color="red"
                        >
                            <PiSignOutBold className="text-base" /> SignOut
                        </Typography>
                    </MenuItem>
                </MenuList>
            </Menu>
        </div>
    );
};

// className={`flex items-center gap-2 rounded ${isLastItem
//     ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
//     : ""
// }`}

export default Profile;