import { IconButton, Typography } from "@material-tailwind/react";
import PropTypes from 'prop-types';
import { MdAdminPanelSettings } from "react-icons/md";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const UsersTableRow = ({ item, refetch }) => {
    const axiosSecure = useAxiosSecure();
    const handleMakeAdmin = async() => {
        await axiosSecure.patch(`/users?email=${item?.email}`, {role: 'admin'});
        refetch();
    }
    return (
        <tr>
            <td className='p-4 border-b border-blue-gray-50'>
                <Typography className="font-normal text-center text-blue-gray-700">
                    {item?.name}
                </Typography>
            </td>
            <td className='p-4 border-b border-blue-gray-50'>
                <Typography className="font-normal text-center text-blue-gray-700">
                    {item?.email}
                </Typography>
            </td>
            <td className='p-4 border-b border-blue-gray-50'>
                <div className="flex justify-center">
                    {
                        item?.role !== 'admin'
                            ?
                            <IconButton onClick={handleMakeAdmin} color="green"><MdAdminPanelSettings className="text-xl" /></IconButton>
                            : 'Admin'
                    }
                </div>
            </td>
            <td className='p-4 border-b border-blue-gray-50'>
                <Typography color="blue" className="font-normal text-center">
                    {
                        item?.badge
                    }
                </Typography>
            </td>
        </tr>
    );
};

UsersTableRow.propTypes = {
    item: PropTypes.object,
    refetch: PropTypes.func,
}

export default UsersTableRow;