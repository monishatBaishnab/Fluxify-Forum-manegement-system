import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MyPosts = () => {
    const axiosSecure = useAxiosSecure();

    const getPosts = async () => {
        const res = await axiosSecure.get(`/posts?email=`)
    }

    const {} = useQuery();

    return (
        <div>
            
        </div>
    );
};

export default MyPosts;