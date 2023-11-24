import { Button, Input, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUp = () => {
    const { register, handleSubmit } = useForm();
    const formSubmit = async (data) => {
        const image = data.image;
        console.log(image);
        const formData = new FormData();
        formData.append('image', image);

        const api = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_API}`;
        // console.log(api, formData);
        const res = await axios.post(api, {image: formData});
        console.log(res);
    }
    return (
        <div className="bg-[#FAFAFA]">
            <div className="flex items-center justify-center min-h-screen py-10 px-5">
                <div className="w-[600px] mx-auto bg-white p-5 md:p-10 py-10">
                    <Typography className="text-center" variant="h3">Join Alem community</Typography>
                    <form onSubmit={handleSubmit(formSubmit)} className="space-y-4">
                        <div className="space-y-2">
                            <Typography as='label' htmlFor='name' color="blue-gray"> Your Name </Typography>
                            <Input {...register('name')} type="text" placeholder="Name" id="name" className=" !border-t-blue-gray-200 focus:!border-t-gray-900" labelProps={{ className: "before:content-none after:content-none", }} />
                        </div>
                        <div className="space-y-2">
                            <Typography as='label' htmlFor='email' color="blue-gray"> Your Email </Typography>
                            <Input {...register('email')} type="email" placeholder="user@gmail.com" id="email" className=" !border-t-blue-gray-200 focus:!border-t-gray-900" labelProps={{ className: "before:content-none after:content-none", }} />
                        </div>
                        <div className="space-y-2">
                            <Typography as='label' htmlFor='photo' color="blue-gray"> Photo URL </Typography>
                            <input {...register('image')} type="file" name="image" id="image" />
                        </div>
                        <div className="space-y-2">
                            <Typography as='label' htmlFor='password' color="blue-gray"> Password </Typography>
                            <Input {...register('password')} type="password" placeholder="****" id="password" className=" !border-t-blue-gray-200 focus:!border-t-gray-900" labelProps={{ className: "before:content-none after:content-none", }} />
                        </div>
                        <Button type="submit" fullWidth className="bg-primary">Sign up</Button>
                    </form>
                    <Typography className="text-center mt-5">Already registered? <Link to='/signin' className="font-medium">Go to sing in</Link></Typography>
                </div>
            </div>
        </div>
    );
};

export default SignUp;