import { Button, Input, Typography } from "@material-tailwind/react";
import { FaRegComments } from "react-icons/fa";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <div className="container py-10">
                <div className="bg-white rounded-lg p-4">
                    <Typography variant="h5" className="font-medium text-c-gray mb-3">Search Post</Typography>
                    <div className="flex gap-2 items-center">
                        <Input
                            size="lg"
                            placeholder="Post tag"
                            className=" !border-t-blue-gray-200 focus:border-primary focus:!border-t-primary"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <div className="flex-1">
                            <Button className="bg-primary">Search</Button>
                        </div>
                    </div>
                </div>


                <div className="space-y-5 my-10">

                    <div className="flex gap-5 p-5 bg-white rounded-lg">
                        <div className="w-[56px] h-[56px] md:w-[156px] md:h-[156px] overflow-hidden">
                            <img className="w-full h-full object-cover rounded-md" src="https://i.ibb.co/Qnrq538/History-Research-Project.jpg" alt="" />
                        </div>
                        <div className="flex-1">
                            <div className="flex flex-col justify-between">
                            <div className="mb-3">
                                <Link><Typography variant="h5" className="font-medium">Blockchain developer best practices on innovationchain</Typography></Link>
                                <div className="flex items-center gap-2 my-2">
                                    <Typography className="px-2 bg-[#EAEAEA] rounded-sm text-[#808080]" as='span'>finance</Typography>
                                    <Typography className="px-2 bg-[#EAEAEA] rounded-sm text-[#808080]" as='span'>finance</Typography>
                                    <Typography className="px-2 bg-[#EAEAEA] rounded-sm text-[#808080]" as='span'>finance</Typography>
                                </div>
                            </div>
                            <div className="flex items-end md:justify-between flex-wrap gap-2">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full overflow-hidden">
                                        <img className="h-full w-full object-cover" src="https://i.ibb.co/p1mrBLK/fb-prfile.jpg" alt="" />
                                    </div>
                                    <div>
                                        <Typography variant="h6" className="font-medium whitespace-nowrap">Monishat Baishnab</Typography>
                                        <Typography as='span' className="text-sm text-c-gray">3 days ago</Typography>
                                    </div>
                                </div>
                                <div className="flex gap-4 flex-wrap">
                                    <Typography as='span' className="flex items-center gap-2 text-[#808080]"><FaRegComments /> 24</Typography>
                                    <Typography as='span' className="flex items-center gap-2 text-[#808080]"><AiFillLike /> 24</Typography>
                                    <Typography as='span' className="flex items-center gap-2 text-[#808080]"><AiFillDislike /> 24</Typography>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Home;