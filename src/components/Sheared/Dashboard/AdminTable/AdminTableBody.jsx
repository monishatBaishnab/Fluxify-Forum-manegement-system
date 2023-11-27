import { Typography } from "@material-tailwind/react";
import PropTypes from 'prop-types';

const AdminTableBody = ({ tableHead, children }) => {
    return (
        <div className="overflow-x-auto min-h-[500px]">
            <table className="w-full min-w-max table-auto text-left">
                <thead>
                    <tr>
                        {tableHead.map((head) => (
                            <th
                                key={head}
                                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                            >
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal leading-none opacity-70 text-center"
                                >
                                    {head}
                                </Typography>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {children}
                </tbody>
            </table>
        </div>
    );
};

AdminTableBody.propTypes = {
    children: PropTypes.node,
    tableHead: PropTypes.array,
}

// {
//     data?.map(item => <UsersTableRow key={item?._id} item={item} />)
// }

export default AdminTableBody;