import { Typography } from "@material-tailwind/react";
import { FaAngleRight, FaRegComments } from "react-icons/fa";
import { IoBookmarksOutline } from "react-icons/io5";
import { FiUsers } from "react-icons/fi";

const About = () => {
    return (
        <div className="container py-5 min-h-[calc(100vh_-_85px)] space-y-3">
            <Typography color="blue" className="font-medium text-center" variant="h3">Our Story</Typography>
            <Typography className="font-normal text-blue-gray-600 text-center">Bringing People Together with Better Forums</Typography>
            <Typography className="font-normal text-blue-gray-600">Welcome to our Forum Management System, where community thrives, and conversations come to life! At Fluxify, we are passionate about fostering meaningful discussions and creating a vibrant online space for like-minded individuals. Our platform is designed to empower communities, encourage knowledge-sharing, and build connections that transcend digital boundaries.</Typography>
            <Typography className="font-normal text-blue-gray-600">With a commitment to user-friendly functionality and cutting-edge features, we strive to provide a seamless and enriching experience for both moderators and members. Whether you are a seasoned contributor or a newcomer, Fluxify is your go-to destination for engaging discussions, valuable insights, and a sense of belonging.</Typography>

            <Typography color="blue" className="font-medium text-center" variant="h3">Forum Engagement Metrics Overview</Typography>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="bg-white p-5 rounded-md space-y-5">
                    <div className="flex gap-5">
                        <div className="w-16 h-16 bg-[#7B57E0] flex items-center justify-center text-white rounded-full">
                            <IoBookmarksOutline className="text-xl" />
                        </div>
                        <div className="text-[#2B2E48]">
                            <Typography className="font-normal text-lg">Total Posts</Typography>
                            <Typography className="font-medium text-2xl">15+</Typography>
                        </div>
                    </div>
                    <div>
                        <button className="text-[#7B57E0] flex items-center">View All <FaAngleRight /></button>
                    </div>
                </div>
                <div className="bg-white p-5 rounded-md space-y-5">
                    <div className="flex gap-5">
                        <div className="w-16 h-16 bg-[#7B57E0] flex items-center justify-center text-white rounded-full">
                            <FiUsers className="text-xl" />
                        </div>
                        <div className="text-[#2B2E48]">
                            <Typography className="font-normal text-lg">Total Users</Typography>
                            <Typography className="font-medium text-2xl">20+</Typography>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-5 rounded-md space-y-5">
                    <div className="flex gap-5">
                        <div className="w-16 h-16 bg-[#7B57E0] flex items-center justify-center text-white rounded-full">
                            <FaRegComments className="text-xl" />
                        </div>
                        <div className="text-[#2B2E48]">
                            <Typography className="font-normal text-lg">Total Comments</Typography>
                            <Typography className="font-medium text-2xl">30+</Typography>
                        </div>
                    </div>
                    <div>
                        <button className="text-[#7B57E0] flex items-center">View All <FaAngleRight /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;