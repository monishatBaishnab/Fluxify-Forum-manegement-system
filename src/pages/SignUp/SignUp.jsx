import { Button, Input, Typography } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { fileUploader } from "../../api/fileUploader";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
    const { signUpWithEmailAndPass, updateUser, signInWithGoogle } = useAuth();
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const formSubmit = async (data) => {
        const toastId = toast.loading('User creating...');
        const image = data.image[0];
        const res = await fileUploader(image);
        const uploadedImage = res?.data?.display_url;
        const name = data.name;
        const email = data.email;
        const password = data.password;

        if (password.length < 6) {
            toast.error('Password length must be at least 6 characters.', { id: toastId })
            return;
        }

        try {
            await signUpWithEmailAndPass(email, password);
            await updateUser(name, uploadedImage);
            const signedUser = {
                name,
                email,
                image: uploadedImage
            }
            await axiosPublic.post('/users', signedUser);
            await axiosSecure.post('/create-token', { email });
            toast.success("User created.", { id: toastId });
            navigate('/');
        } catch (error) {
            toast.success("User created Failed.", { id: toastId });
            console.log(error);
        }

    }
    const handleGoogleSignIn = async () => {
        const toastId = toast.loading('Signing in user...');
        try {
            const { user } = await signInWithGoogle();
            toast.success('User signed in', { id: toastId });
            const signedUser = {
                "name": user?.displayName,
                "email": user?.email,
                "image": user?.photoURL
            }

            await axiosPublic.put(`/users?email=${user?.email}`, signedUser);
            await axiosSecure.post('/create-token', { email: user?.email });
            navigate('/');
        } catch (error) {
            toast.error('Error signing in user.', { id: toastId });
            console.log(error);
        }
    }
    return (
        <div className="bg-[#FAFAFA]">
            <div className="flex items-center justify-center min-h-screen py-10 px-5">
                <div className="w-[600px] mx-auto bg-white p-5 md:p-10 py-10">
                    <Typography className="text-center" variant="h3">Join Fluxify community</Typography>
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
                    <Typography className="text-center mt-5">Already registered? <Link to='/signin' className="font-medium">Go to sing in</Link></Typography><Button onClick={handleGoogleSignIn} fullWidth className="bg-primary/10 text-blue-gray-900 mt-3 shadow-none focus:shadow-none active:shadow-none hover:shadow-none flex items-center justify-center gap-3"><FcGoogle className="text-lg" />Sign with Google</Button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;