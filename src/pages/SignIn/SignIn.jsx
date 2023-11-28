import { Button, Input, Typography } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SignIn = () => {
    const { signInWithEmailAndPass, signInWithGoogle } = useAuth();
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
    const location = useLocation();
    const navigateLocation = location?.state?.from ? location?.state?.from : '/';
    

    const formSubmit = async (data) => {
        const toastId = toast.loading('Signing in user...');
        try {
            await signInWithEmailAndPass(data.email, data.password);
            await axiosSecure.post('/create-token', {email: data?.email});
            toast.success('User signed in', { id: toastId });
            navigate(navigateLocation);
        } catch (error) {
            toast.error('Error signing in user.', { id: toastId });
            console.log(error);
        }
    }

    
    const handleGoogleSignIn = async () => {
        const toastId = toast.loading('Signing in user...');
        try {
            const {user} = await signInWithGoogle();
            toast.success('User signed in', { id: toastId });
            const signedUser = {
                "name": user?.displayName,
                "email": user?.email,
                "image": user?.photoURL
            }

            await axiosPublic.put(`/users?email=${user?.email}`, signedUser);
            await axiosSecure.post('/create-token', {email: user?.email});
            navigate(navigateLocation);
        } catch (error) {
            toast.error('Error signing in user.', { id: toastId });
            console.log(error);
        }
    }
    return (
        <div className="bg-[#FAFAFA]">
            <div className="flex items-center justify-center min-h-screen py-10 px-5">
                <div className="w-[400px] mx-auto bg-white p-5 md:p-10">
                    <Typography className="text-center" variant="h3">{`We've missed you!`}</Typography>
                    <Typography className="text-center text-c-gray text-sm" variant="paragraph">Many questions are waiting for your wise suggestions!</Typography>
                    <form onSubmit={handleSubmit(formSubmit)} className="space-y-4">
                        <div className="space-y-2">
                            <Typography as='label' htmlFor='email' color="blue-gray"> Your Email </Typography>
                            <Input {...register('email')} type="email" placeholder="user@gmail.com" id="email" className=" !border-t-blue-gray-200 focus:!border-t-gray-900" labelProps={{ className: "before:content-none after:content-none", }} />
                        </div>
                        <div className="space-y-2">
                            <Typography as='label' htmlFor='password' color="blue-gray"> Password </Typography>
                            <Input {...register('password')} type="password" placeholder="****" id="password" className=" !border-t-blue-gray-200 focus:!border-t-gray-900" labelProps={{ className: "before:content-none after:content-none", }} />
                        </div>
                        <Typography className="cursor-pointer hover:underline">Forgot Password</Typography>
                        <Button type="submit" fullWidth className="bg-primary">Sign in</Button>
                    </form>
                    <Typography className="text-center mt-5">New here?  <Link to='/signup' className="font-medium">Create a New Account</Link></Typography>
                    <Button onClick={handleGoogleSignIn} fullWidth className="bg-primary/10 text-blue-gray-900 mt-3 shadow-none focus:shadow-none active:shadow-none hover:shadow-none flex items-center justify-center gap-3"><FcGoogle className="text-lg" />Sign with Google</Button>
                </div>
            </div>
        </div>
    );
};

export default SignIn;