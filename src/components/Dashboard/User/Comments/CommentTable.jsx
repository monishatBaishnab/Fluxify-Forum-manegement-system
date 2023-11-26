import { Typography } from "@material-tailwind/react";
import PropTypes from 'prop-types';
import TableRow from "./TableRow";

const CommentTable = ({ data }) => {
    const TABLE_HEAD = ["Title", "Full Comment", "Action"];

    return (
        <table className="w-full min-w-max table-auto text-left">
            <thead>
                <tr>
                    {TABLE_HEAD.map((head) => (
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
                {
                    data?.map((comment, index) => {
                        const isLast = index === data.length - 1;
                        return (
                            <TableRow key={comment?._id} comment={comment} isLast={isLast} />
                        )
                    })
                }
            </tbody>
        </table>
    );
};

CommentTable.propTypes = {
    data: PropTypes.array,
}

export default CommentTable;