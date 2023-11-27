import PropTypes from 'prop-types';
import UsersTableRow from "./UsersTableRow";
import AdminTableBody from "../../../Sheared/Dashboard/AdminTable/AdminTableBody";

const UsersTable = ({ data, refetch }) => {
    const TABLE_HEAD = ["User Name", "User Email", "Make Admin", "Membership"];

    return (
        <AdminTableBody tableHead={TABLE_HEAD}>
            {
                data?.map(item => <UsersTableRow key={item?._id} refetch={refetch} item={item} />)
            }
        </AdminTableBody>
    );
};

UsersTable.propTypes = {
    data: PropTypes.array,
    refetch: PropTypes.func,
}

export default UsersTable;