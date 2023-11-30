import PropTypes from 'prop-types';
import { Chip, IconButton } from '@material-tailwind/react';
import { MdAdminPanelSettings } from 'react-icons/md';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import DataTable from 'react-data-table-component';
import { customStyles } from '../../../../api/tableStyles';
import { HiBadgeCheck } from 'react-icons/hi';

const UsersTable = ({ data, refetch }) => {
    const axiosSecure = useAxiosSecure();
    const handleMakeAdmin = async(email) => {
        await axiosSecure.patch(`/users?email=${email}`, {role: 'admin', badge: 'Gold'});
        refetch();
    }

    const columns = [
        {
            name: 'User Name',
            selector: row => row?.name
        },
        {
            name: 'Make Admin',
            selector: row => row?.email
        },
        {
            name: 'Action',
            cell: row =>
            row?.role !== 'admin'
            ?
            <IconButton onClick={() =>handleMakeAdmin(row?.email)} color="green"><MdAdminPanelSettings className="text-xl" /></IconButton>
            : 'Admin'
            
        },
        {
            name: 'Membership',
            cell: row => <Chip className={`${row?.badge === 'Gold' ? 'bg-[#FFD700]' : 'bg-blue-500'}`} value={row?.badge} icon={<HiBadgeCheck className="text-xl" />} />
        }
    ];

    return (
        <DataTable  data={data} columns={columns} customStyles={customStyles} pagination />
    );
};

UsersTable.propTypes = {
    data: PropTypes.array,
    refetch: PropTypes.func,
}

export default UsersTable;