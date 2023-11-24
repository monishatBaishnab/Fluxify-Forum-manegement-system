import { ListItem, ListItemPrefix } from "@material-tailwind/react";
import { FaHome, FaUsersCog } from "react-icons/fa";

const SidebarItems = () => {
    const usersItems = [
        {
            id: '1',
            level: 'Home',
            icon: <FaHome />
        },
        {
            id: '2',
            level: 'Membership',
            icon: <FaUsersCog />
        }
    ]
    return (
        <div>
            {usersItems.map(item => <ListItem key={item.id} className="rounded-none hover:bg-primary/10 focus:bg-primary/10 active:bg-primary/10 hover:text-primary focus:text-primary active:text-primary">
                <ListItemPrefix>
                    {item.icon}
                </ListItemPrefix>
                {item.level}
            </ListItem>)}
        </div>
    );
};

export default SidebarItems;