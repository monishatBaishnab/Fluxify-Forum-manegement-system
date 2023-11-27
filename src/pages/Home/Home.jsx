import { Button, Input, Typography } from "@material-tailwind/react";
import PostContainer from "../../components/Home/PostContainer/PostContainer";
import LoadinPost from "../../components/Home/PostContainer/LoadinPost";
import Pagination from "../../components/Home/PostContainer/Pagination";
import { useRef, useState } from "react";
import useFetchAllPost from "../../hooks/useFetchAllPost";
import postTags from "../../api/postTags";
import empty from '../../assets/empty.svg'
import Announcements from "../../components/Home/Announcements/Announcements";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const Home = () => {
    const axiosSecure = useAxiosSecure();
    const [page, setPage] = useState(1);
    const offset = 5;
    const tagRef = useRef(undefined);
    const [searchTag, setSearchTag] = useState(undefined);

    const handleSearch = () => {
        const tag = tagRef.current.value;
        if (tag) {
            setSearchTag(tag);
        }
        else {
            setSearchTag(undefined);
        }
    }
    const { data, isLoading } = useFetchAllPost(page, offset, searchTag);
    const handleTagClick = (tag) => {
        if (tag === "All") {
            return setSearchTag(undefined);
        }
        setPage(1);
        setSearchTag(tag);
    }

    const getAnnouncements = async() => {
        const res = await axiosSecure.get('/annoucements');
        return res.data;
    }

    const {data: annoucements, isLoading: annoucementsLoading} = useQuery({queryKey: ['announcements'], queryFn: getAnnouncements});
    
    return (
        <div className="overflow-hidden">
            <div className="container py-10">
                {!annoucementsLoading && annoucements?.length > 0 && <Announcements announcements={annoucements}  />}
                <div className="bg-white rounded-lg p-4">
                    <Typography variant="h5" className="font-medium text-c-gray mb-3">Search Post</Typography>
                    <div className="flex gap-2 items-center">
                        <Input
                            inputRef={tagRef}
                            size="lg"
                            placeholder="Post tag"
                            className=" !border-t-blue-gray-200 focus:border-primary focus:!border-t-primary"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <div className="flex-1">
                            <Button onClick={handleSearch} className="bg-primary">Search</Button>
                        </div>
                    </div>
                </div>
                <div className="my-2 overflow-hidden p-5 rounded-md bg-white mt-5 max-w-[calc(100vw_-_40px)] md:max-w-[calc(100vw_-_80px)] lg:max-w-[calc(100vw_-_660px)]">
                    <div id="tags" className="flex overflow-x-auto gap-2 py-2">
                        {postTags.map(tag => <Typography onClick={() => handleTagClick(tag)} key={tag} className={`px-2 cursor-pointer bg-[#EAEAEA] rounded-sm text-[#808080] transition-all hover:bg-blue-500 hover:text-white ${tag === searchTag ? 'bg-blue-500 text-white' : ''}`} as='span'>{tag}</Typography>)}
                    </div>
                </div>
                {isLoading ?
                    <LoadinPost /> :
                    <PostContainer posts={data?.data} />}
                {
                    data?.count === 0 &&
                    <div className="flex items-center justify-center flex-col">
                        <img src={empty} alt="" />
                        <Typography variant="h4" className="font-medium text-blue-gray-700 ml-3">No data here!</Typography>
                    </div>
                }
                <Pagination count={data?.count} setPage={setPage} offset={offset} />
            </div>
        </div>
    );
};

export default Home;