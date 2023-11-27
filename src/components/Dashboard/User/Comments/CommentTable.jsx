import PropTypes from 'prop-types';
import TableRow from "./TableRow";
import AdminTableBody from "../../../Sheared/Dashboard/AdminTable/AdminTableBody";

const CommentTable = ({ data, refetch }) => {
    const TABLE_HEAD = ["Title", "Full Comment", "Feedback", "Report"];

    return (
        <AdminTableBody tableHead={TABLE_HEAD}>
            {
                data?.map((comment, index) => {
                    const isLast = index === data.length - 1;
                    return (
                        <TableRow refetch={refetch} key={comment?._id} comment={comment} isLast={isLast} />
                    )
                })
            }
        </AdminTableBody>
    );
};

CommentTable.propTypes = {
    data: PropTypes.array,
    refetch: PropTypes.func,
}

export default CommentTable;