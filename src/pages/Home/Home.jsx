import { Input, Option, Select, Typography } from "@material-tailwind/react";
import PostContainer from "../../components/Home/PostContainer/PostContainer";
import LoadinPost from "../../components/Home/PostContainer/LoadinPost";
import Pagination from "../../components/Home/PostContainer/Pagination";
import { useRef, useState } from "react";
import useFetchAllPost from "../../hooks/useFetchAllPost";
import empty from '../../assets/empty.svg'
import Announcements from "../../components/Home/Announcements/Announcements";
import useFetchAnnoucements from "../../hooks/useFetchAnnoucements";
import { AwesomeButton } from "react-awesome-button";
import useFetchTags from "../../hooks/useFetchTags";


const Home = () => {
    const [page, setPage] = useState(1);
    const offset = 5;
    const tagRef = useRef(undefined);
    const [searchTag, setSearchTag] = useState(undefined);
    const [sort, setSort] = useState('defult');

    const handleSearch = () => {
        const tag = tagRef.current.value;
        if (tag) {
            setSearchTag(tag);
        }
        else {
            setSearchTag(undefined);
        }
    }
    const { data, isLoading } = useFetchAllPost(page, offset, searchTag, sort);

    const handleTagClick = (tag) => {
        if (tag === "All") {
            return setSearchTag(undefined);
        }
        setPage(1);
        setSearchTag(tag);
    }

    const { annoucements, annoucementsLoading } = useFetchAnnoucements();
    const postTags = useFetchTags();

    return (
        <div className="overflow-hidden">
            <div className="container py-10">
                {!annoucementsLoading && annoucements?.length > 0 && <Announcements announcements={annoucements} />}
                <div className="bg-white rounded-lg p-4">
                    <Typography variant="h5" className="font-medium text-c-gray mb-3">Search Post</Typography>
                    <div className="flex gap-2 items-center flex-wrap">
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
                            <AwesomeButton type="secondary" onPress={handleSearch} className="bg-primary">Search</AwesomeButton>
                        </div>
                        <div className="w-[150px]">
                            <Select value={sort} onChange={(data) => setSort(data)} label="Sort" containerProps={{ className: '!min-w-[150px]' }}>
                                <Option value="defult">Default</Option>
                                <Option value="popularity">Popularity</Option>
                            </Select>
                        </div>
                    </div>
                </div>
                <div className="my-2 overflow-hidden p-5 rounded-md bg-white mt-5 max-w-[calc(100vw_-_40px)] md:max-w-[calc(100vw_-_80px)] lg:max-w-[calc(100vw_-_660px)]">
                    <div id="tags" className="flex overflow-x-auto gap-2 py-2">
                        {postTags?.map(tag => <Typography onClick={() => handleTagClick(tag?.value)} key={tag?._id} className={`px-2 cursor-pointer bg-[#EAEAEA] rounded-sm text-[#808080] transition-all hover:bg-blue-500 hover:text-white ${tag?.value === searchTag ? 'bg-blue-500 text-white' : ''}`} as='span'>{tag?.label}</Typography>)}
                    </div>
                </div>
                {isLoading ?
                    <LoadinPost /> :
                    <div className=" my-10"><PostContainer posts={data?.data} /></div>}
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