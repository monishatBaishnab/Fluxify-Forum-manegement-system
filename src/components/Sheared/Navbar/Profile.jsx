import { Avatar, Button, Menu, MenuHandler, MenuItem, MenuList, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { FaRegUser } from "react-icons/fa"; 
import { PiSignOutBold } from "react-icons/pi";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
const Profile = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {user, signOutUser} = useAuth();
    const axiosSecure = useAxiosSecure();

    const handleClick = async(label) => {
        setIsMenuOpen(false);
        if(label === 'Sign Out'){
            await signOutUser();
            await axiosSecure.post('/remove-token');
        }
    }

    const profileMenuItems = [
        {
            label: "Dashboard",
            icon: <RxDashboard className="text-base" />,
        },
        {
          label: "My Profile",
          icon: <FaRegUser className="text-base" />,
        },
        {
          label: "Sign Out",
          icon: <PiSignOutBold className="text-base" />,
        },
      ];
   
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
                    {profileMenuItems.map(({ label, icon}, key) => {
                        const isLastItem = key === profileMenuItems.length - 1;
                        return (
                            <MenuItem
                                key={label}
                                onClick={() => handleClick(label)}
                                className={`flex items-center gap-2 rounded ${isLastItem
                                        ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                                        : ""
                                    }`}
                            >
                                <Typography
                                    as="span"
                                    variant="small"
                                    className="font-normal flex items-center gap-2"
                                    color={isLastItem ? "red" : "inherit"}
                                >
                                    {icon}{label}
                                </Typography>
                            </MenuItem>
                        );
                    })}
                </MenuList>
            </Menu>
        </div>
    );
};

export default Profile;