import { ListItem, ListItemPrefix } from "@material-tailwind/react";
import { FaHome, FaUsersCog } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const SidebarItems = () => {
    const usersItems = [
        {
            id: '1',
            level: 'Home',
            icon: <FaHome />,
            path: '/'
        },
        {
            id: '2',
            level: 'Membership',
            icon: <FaUsersCog />,
            path: '/membership'
        }
    ]
    return (
        <div>
            {usersItems.map(item => <NavLink to={item.path} key={item.id}
                className={({ isActive}) =>
                     isActive ? "text-primary " : ""
                }
            >
                <ListItem className="rounded-none hover:bg-primary/10 focus:bg-primary/10 active:bg-primary/10 hover:text-primary focus:text-primary active:text-primary">
                    <ListItemPrefix>
                        {item.icon}
                    </ListItemPrefix>
                    {item.level}
                </ListItem>
            </NavLink>)}
        </div>
    );
};

export default SidebarItems;