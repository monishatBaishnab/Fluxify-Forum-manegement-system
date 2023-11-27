import { Button, Dialog, DialogBody, IconButton, Option, Select, Typography } from "@material-tailwind/react";
import PropTypes from 'prop-types';
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const TableRow = ({ comment, isLast, refetch }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    const axiosSecure = useAxiosSecure();
    const [feedback, setFeedback] = useState(null);

    const handleFeedback = async () => {
        const res = await axiosSecure.patch(`/comments/${comment?._id}`, { feedback, report: true })
        console.log(res);
        setFeedback(null);
        refetch();
    }

    const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
    return (
        <>
            <tr key={comment?._id}>
                <td className={classes}>
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal text-center"
                    >
                        {comment?.comment?.length > 45 ? comment?.comment?.slice(0, 45) : comment?.comment}

                    </Typography>
                </td>
                <td className={classes}>
                    <div className="flex justify-center">
                        <IconButton onClick={handleOpen} color="blue"><FaEye className="text-xl" /></IconButton>
                    </div>
                </td>
                <td className={classes}>
                    <div className="flex justify-center">
                        {
                            comment?.feedback === null ?
                                <div className="w-[150px]">
                                    <Select onChange={(val) => setFeedback(val)} label="Feedback" containerProps={{ className: '!min-w-[150px]' }}>
                                        <Option value="Satisfactory">Satisfactory</Option>
                                        <Option value="Improvement">Improvement</Option>
                                        <Option value="Exceptional">Exceptional</Option>
                                    </Select>
                                </div> :
                                comment?.feedback
                        }
                    </div>
                </td>
                <td className={classes}>
                    <div className="flex justify-center">
                        <Button onClick={handleFeedback} disabled={feedback===null} color="red">Report</Button>
                    </div>
                </td>
            </tr>
            <Dialog open={open} handler={handleOpen}>
                <DialogBody>
                    {comment?.comment}
                </DialogBody>
            </Dialog>
        </>
    );
};

TableRow.propTypes = {
    comment: PropTypes.object,
    isLast: PropTypes.bool,
    refetch: PropTypes.func,
}

export default TableRow;