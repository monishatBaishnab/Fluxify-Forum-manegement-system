import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import { fileUploader } from "../../../api/fileUploader";
import { useState } from "react";
import { ImSpinner9 } from "react-icons/im";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import useFetchUser from "../../../hooks/useFetchUser";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import FetchLoading from "./FetchLoading";
import DashboardContainer from "../../../components/Sheared/Dashboard/DashboardContainer/DashboardContainer";
import { useNavigate } from "react-router-dom";

const animatedComponents = makeAnimated();

const AddPost = () => {
    const [thumb, setThumb] = useState('');
    const [thumbLoading, setThumbLoading] = useState(false);
    const { register, handleSubmit, reset } = useForm();
    const axiosSecure = useAxiosSecure();
    const [tags, setTags] = useState(null);
    const { data: currentUser } = useFetchUser();
    const navigate = useNavigate();

    let postLimit = 5;
    if(currentUser?.badge === 'Golde'){
        postLimit = 12;
    }

    const getPosts = async () => {
        const res = await axiosSecure.get(`/posts/count?id=${currentUser?._id}`);
        return res.data;
    }
    const getTags = async () => {
        const res = await axiosSecure.get(`/post-tags`);
        return res.data;
    }

    const { data: count, isLoading, refetch } = useQuery({ queryKey: ['count', currentUser?._id], queryFn: getPosts, enabled: !!currentUser?._id });
    const { data: postTags } = useQuery({ queryKey: ['post-tags'], queryFn: getTags});

    const fileUpload = async (e) => {
        setThumbLoading(true);
        try {
            const res = await fileUploader(e.target.files[0]);
            setThumb(res.data.display_url);
            setThumbLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    const formSubmit = async (data) => {
        if (tags === null || thumb === '' || currentUser === undefined || data.description === '') {
            return toast.error('Please fill in all required fields.')
        }
        const post = {
            ...data,
            tags: tags.map(tag => tag.label),
            image: thumb,
            user: currentUser._id
        }
        const toastId = toast.loading('Adding post...');
        try {
            await axiosSecure.post('/posts', post);
            toast.success("Post added successfully.", { id: toastId });
            reset();
            refetch();
            setThumb('');
        } catch (error) {
            console.log(error);
            toast.success("Failed to add post.", { id: toastId });
        }
    }

    return (
        <DashboardContainer title='Add Post'> 
            {
                isLoading ?
                    <FetchLoading />
                    :
                    count?.count[0]?.count >= postLimit && currentUser?.role !== 'admin' && currentUser?.badge !== 'Gold' ?
                        <div className="flex flex-col items-center gap-2">
                            <Typography variant="h4" color="red" className="text-center">Your Post Limit Over.</Typography>
                            <Typography className="font-normal text-blue-gray-500 text-center">You have reached the maximum post limit. Become a member to unlock more posting limit!</Typography>
                            <Button onClick={() => navigate('/dashboard/payment')} color="blue">Become a Member</Button>
                        </div>
                        :
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            <div className="">
                                <div className="w-full h-[250px] bg-blue-50 overflow-hidden rounded-md flex items-center justify-center">
                                    {
                                        thumb !== '' ? <img className="w-full h-full object-cover" src={thumb} alt="" />
                                            :
                                            thumbLoading === true ? <ImSpinner9 className="animate-spin text-xl text-blue-500" />
                                                : <Typography className="font-medium text-blue-500">Thumb Preview</Typography>
                                    }

                                </div>
                            </div>


                            <div className="md:col-span-2">
                                <form onSubmit={handleSubmit(formSubmit)} className="space-y-3">
                                    <div>
                                        <Typography className="font-medium text-blue-gray-600 mb-1" as='label' htmlFor='title'>Post Title</Typography>
                                        <Input required {...register('title')} type="text" placeholder="Title" id="title" className=" !border-t-blue-gray-200 focus:!border-t-gray-900" labelProps={{ className: "before:content-none after:content-none", }} />
                                    </div>
                                    <div>
                                        <Typography className="font-medium text-blue-gray-600 mb-1" as='label' htmlFor='desc'>Post Description</Typography>
                                        <Textarea required {...register('description')} type="text" placeholder="Description" id="desc" className=" !border-t-blue-gray-200 focus:!border-t-gray-900" labelProps={{ className: "before:content-none after:content-none", }} />
                                    </div>
                                    <div>
                                        <Typography className="font-medium text-blue-gray-600 mb-1" as='label' htmlFor='thumb'>Post Thumbnile</Typography>
                                        <Select
                                            closeMenuOnSelect={false}
                                            components={animatedComponents}
                                            isMulti
                                            options={postTags}
                                            onChange={setTags}
                                        />
                                    </div>
                                    <div>
                                        <Typography className="font-medium text-blue-gray-600 mb-1" as='label' htmlFor='thumb'>Post Thumbnile</Typography>
                                        <input onChange={(e) => fileUpload(e)} id="thumb" type="file" />
                                    </div>
                                    <Button type="submit" color="blue">Add Post</Button>
                                </form>
                            </div>
                        </div>
            }
        </DashboardContainer>
    );
};

export default AddPost;