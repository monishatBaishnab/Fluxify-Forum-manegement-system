import { ListItem, ListItemPrefix } from '@material-tailwind/react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const SidebarItems = ({items}) => {
    return (
        <div>
            {items?.map(({icon: Icon, level, path,  id}) => <NavLink to={path} key={id}
                className={({ isActive }) =>
                    isActive ? "text-primary " : ""
                }
            >
                <ListItem className="rounded-none hover:bg-primary/10 focus:bg-primary/10 active:bg-primary/10 hover:text-primary focus:text-primary active:text-primary">
                    <ListItemPrefix>
                        <Icon />
                    </ListItemPrefix>
                    {level}
                </ListItem>
            </NavLink>)}
        </div>
    );
};

SidebarItems.propTypes = {
    items: PropTypes.array,
}

export default SidebarItems;