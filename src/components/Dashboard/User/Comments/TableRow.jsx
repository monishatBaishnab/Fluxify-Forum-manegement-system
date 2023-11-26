import { Button, Dialog, DialogBody, IconButton, Option, Select, Typography } from "@material-tailwind/react";
import PropTypes from 'prop-types';
import { useState } from "react";
import { FaEye } from "react-icons/fa";

const TableRow = ({ comment, isLast }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

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
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal text-center"
                    >
                        <IconButton onClick={handleOpen} color="blue"><FaEye className="text-xl" /></IconButton>
                    </Typography>
                </td>
                <td className={classes}>
                    <div className="flex items-center gap-2">
                        <div className="w-[150px]">
                            <Select label="Feedback" containerProps={{ className: '!min-w-[150px]' }}>
                                <Option>Awesome!</Option>
                                <Option>More Details?</Option>
                                <Option>Inspiring!</Option>
                            </Select>
                        </div>
                        <Button color="red">Report</Button>
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
}

export default TableRow;