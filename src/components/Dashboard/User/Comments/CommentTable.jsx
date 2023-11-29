import PropTypes from 'prop-types';
import DataTable from 'react-data-table-component';
import { customStyles } from '../../../../api/tableStyles';
import { Button, Dialog, DialogBody, IconButton, Option, Select, } from '@material-tailwind/react';
import { useState } from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { FaEye } from 'react-icons/fa';
import toast from 'react-hot-toast';

const CommentTable = ({ data, refetch, }) => {
    const [open, setOpen] = useState(false);
    const axiosSecure = useAxiosSecure();
    const [feedback, setFeedback] = useState(null);
    const [comment, setCommment] = useState('');
    const [selectedRow, setSelectedRow] = useState(null);

    const handleOpen = (value) => {
        setOpen(!open);
        setCommment(value);
    };

    const handleFeedback = async (id) => {
        if (feedback !== null) {
            await axiosSecure.patch(`/comments/${id}`, { feedback, report: true })
            setFeedback(null);
            refetch();
        } else {
            toast.error('Please select feedback.');
        }
    }

    const columns = [
        {
            name: 'Comment',
            selector: row => row?.comment?.length > 20 ? row?.comment?.slice(0, 20) : row?.comment
        },
        {
            name: 'Full Comment',
            cell: row => <IconButton onClick={() => handleOpen(row?.comment)} color="blue"><FaEye className="text-xl" /></IconButton>
        },
        {
            name: 'Feedback',
            cell: row =>
                row?.feedback === null ?
                    <div className="w-[150px]">
                        <Select onChange={(val) => { setFeedback(val); setSelectedRow(row); }} label="Feedback" containerProps={{ className: '!min-w-[150px]' }}>
                            <Option value="Satisfactory">Satisfactory</Option>
                            <Option value="Improvement">Improvement</Option>
                            <Option value="Exceptional">Exceptional</Option>
                        </Select>
                    </div> :
                    row?.feedback

        },
        {
            name: 'Report',
            cell: row => <Button onClick={() => handleFeedback(row?._id)} disabled={feedback === null || selectedRow !== row} color="red">Report</Button>
        }
    ];

    return (
        <div>
            <DataTable data={data?.data ? data?.data : data} columns={columns} customStyles={customStyles} pagination />
            <Dialog open={open} handler={handleOpen}>
                <DialogBody>
                    {comment}
                </DialogBody>
            </Dialog>
        </div>
    );
};

CommentTable.propTypes = {
    data: PropTypes.array,
    refetch: PropTypes.func,
}

export default CommentTable;