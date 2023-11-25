import { Button, Input, Typography } from "@material-tailwind/react";
import PostContainer from "../../components/Home/PostContainer/PostContainer";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import LoadinPost from "../../components/Home/PostContainer/LoadinPost";
import Pagination from "../../components/Home/PostContainer/Pagination";
import { useState } from "react";


const Home = () => {
    const axiosPublic = useAxiosPublic();
    // State for the current page and items per page
    const [page, setPage] = useState(1);
    const offset = 5;

    console.log(page);


    const getPosts = async () => {
        const res = await axiosPublic.get(`/posts?page=${page}&offset=${offset}`);
        return res.data;
    }

    const { data, isLoading } = useQuery({ queryKey: ['posts', page], queryFn: getPosts });


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
                {isLoading ?
                    <LoadinPost /> :
                    <PostContainer posts={data?.data} />}
                <Pagination count={data?.count} setPage={setPage} offset={offset} />
            </div>
        </div>
    );
};

export default Home;