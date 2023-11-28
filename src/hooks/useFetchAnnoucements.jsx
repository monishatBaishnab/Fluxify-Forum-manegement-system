import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useFetchAnnoucements = () => {
    const axiosSecure = useAxiosSecure();
    const getAnnouncements = async () => {
        const res = await axiosSecure.get('/annoucements');
        return res.data;
    }

    const { data: annoucements, isLoading: annoucementsLoading } = useQuery({ queryKey: ['announcements'], queryFn: getAnnouncements });
    return {annoucements, annoucementsLoading}
};

export default useFetchAnnoucements;