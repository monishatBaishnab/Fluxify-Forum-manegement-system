import { FaHome, FaList, FaRegUser, FaUsersCog } from "react-icons/fa";
import { MdLibraryAdd } from "react-icons/md";

export const usersItems = [
    {
        id: '1',
        level: 'Home',
        icon: FaHome,
        path: '/'
    },
    {
        id: '2',
        level: 'Membership',
        icon: FaUsersCog,
        path: '/membership'
    }
]


export const usersDashboardItems = [
    {
        id: '1',
        level: 'My Profile',
        icon: FaRegUser,
        path: '/dashboard/user-profile'
    },
    {
        id: '2',
        level: 'Add Post',
        icon: MdLibraryAdd,
        path: '/dashboard/add-post'
    },
    {
        id: '3',
        level: 'My Post',
        icon: FaList,
        path: '/dashboard/my-post'
    }
]

