import { FaHome, FaList, FaRegUser, FaUserShield, FaUsersCog } from "react-icons/fa";
import { MdLibraryAdd } from "react-icons/md";
import { BiSolidCommentError } from "react-icons/bi";
import { GrAnnounce } from "react-icons/gr";
import { PiUsersBold } from "react-icons/pi";
import { TiTags } from "react-icons/ti";

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
    },
    {
        id: '3',
        level: 'About us',
        icon: PiUsersBold,
        path: '/about-us'
    },
    {
        id: '4',
        level: 'Tags',
        icon: TiTags,
        path: '/tags'
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

export const adminDashboardItems = [
    {
        id: '1',
        level: 'Admin Profile',
        icon: FaUserShield,
        path: '/dashboard/admin-profile'
    },
    {
        id: '2',
        level: 'Manage Users',
        icon: FaUsersCog,
        path: '/dashboard/manage-users'
    },
    {
        id: '3',
        level: 'Reported Comments',
        icon: BiSolidCommentError,
        path: '/dashboard/reported-comments'
    },
    {
        id: '4',
        level: '. Make Announcement',
        icon: GrAnnounce,
        path: '/dashboard/announcement'
    }
]

