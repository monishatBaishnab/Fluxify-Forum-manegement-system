import { Button, Input, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const SignIn = () => {
    return (
        <div className="bg-[#FAFAFA]">
            <div className="flex items-center justify-center min-h-screen py-10 px-5">
                <div className="w-[400px] mx-auto bg-white p-5 md:p-10">
                    <Typography className="text-center" variant="h3">{`We've missed you!`}</Typography>
                    <Typography className="text-center text-c-gray text-sm" variant="paragraph">Many questions are waiting for your wise suggestions!</Typography>
                    <form className="space-y-4">
                        <div className="space-y-2">
                            <Typography as='label' htmlFor='email' color="blue-gray"> Your Email </Typography>
                            <Input type="email" placeholder="user@gmail.com" id="email" className=" !border-t-blue-gray-200 focus:!border-t-gray-900" labelProps={{ className: "before:content-none after:content-none", }} />
                        </div>
                        <div className="space-y-2">
                            <Typography as='label' htmlFor='password' color="blue-gray"> Password </Typography>
                            <Input type="password" placeholder="****" id="password" className=" !border-t-blue-gray-200 focus:!border-t-gray-900" labelProps={{ className: "before:content-none after:content-none", }} />
                        </div>
                        <Typography className="cursor-pointer hover:underline">Forgot Password</Typography>
                        <Button type="submit" fullWidth className="bg-primary">Sign in</Button>
                    </form>
                    <Typography className="text-center mt-5">New here?  <Link to='/signup' className="font-medium">Create a New Account</Link></Typography>
                </div>
            </div>
        </div>
    );
};

export default SignIn;