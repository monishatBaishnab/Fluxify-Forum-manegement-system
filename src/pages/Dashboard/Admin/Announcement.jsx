import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import DashboardContainer from "../../../components/Sheared/Dashboard/DashboardContainer/DashboardContainer";
import { useForm } from "react-hook-form";
import useFetchUser from "../../../hooks/useFetchUser";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const Announcement = () => {
    const {register, handleSubmit, reset} = useForm();
    const {data: user} = useFetchUser();
    const axiosSecure = useAxiosSecure();

    const formSubmit = async(data) => {
        const announcement = {
            ...data,
            user: user?._id
        }
        try {
            await axiosSecure.post('/annoucements', announcement);
            reset();
            toast.success('Announcement added.');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <DashboardContainer title='Make Annoucement'>
            <form onSubmit={handleSubmit(formSubmit)} className="max-w-[400px] mx-auto">
                <div>
                    <Typography className="font-medium text-blue-gray-600 mb-1" as='label' htmlFor='title'>Title</Typography>
                    <Input required {...register('title')} type="text" placeholder="Title" id="title" className=" !border-t-blue-gray-200 focus:!border-t-gray-900" labelProps={{ className: "before:content-none after:content-none", }} />
                </div>
                <div>
                    <Typography className="font-medium text-blue-gray-600 mb-1" as='label' htmlFor='desc'>Description</Typography>
                    <Textarea required {...register('description')} type="text" placeholder="Description" id="desc" className=" !border-t-blue-gray-200 focus:!border-t-gray-900" labelProps={{ className: "before:content-none after:content-none", }} />
                </div>
                <Button type="submit" color="blue">Publish Announcement</Button>
            </form>
        </DashboardContainer>
    );
};

export default Announcement;