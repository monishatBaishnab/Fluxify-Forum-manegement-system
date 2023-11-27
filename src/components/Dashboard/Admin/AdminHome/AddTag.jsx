import { Button, Input, Typography } from "@material-tailwind/react";
import { useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const AddTag = () => {
    const axiosSecure = useAxiosSecure();
    const [tag, setTag] = useState('');

    const handleAddTag = async () => {
        try {
            const postTag = {value: tag, label: tag};
            await axiosSecure.post('/post-tags', postTag);
            toast.success('Tag added.')
        } catch (error) {
            console.log(error);
            toast.error('Tag added faild.');
        }
    }
    return (
        <div>
            <Typography variant="h4" className="border-b pb-2">Add post Tag</Typography>
            <div className="space-y-2 my-2 max-w-sm">
                <Typography as='label' htmlFor='tag' color="blue-gray" className="font-medium"> Post Tag </Typography>
                <Input onChange={(e) => setTag(e.target.value)} type="text" placeholder="Tag name" id="tag" className=" !border-t-blue-gray-200 focus:!border-t-gray-900" labelProps={{ className: "before:content-none after:content-none", }} />
            </div>

            <Button onClick={handleAddTag} color="blue">Add</Button>
        </div>
    );
};

export default AddTag;