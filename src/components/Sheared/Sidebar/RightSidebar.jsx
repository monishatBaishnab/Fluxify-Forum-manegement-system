import { Typography } from "@material-tailwind/react";
import useFetchTags from "../../../hooks/useFetchTags";
import { ImPriceTags } from "react-icons/im";

const RightSidebar = () => {
    const postTags = useFetchTags();

    return (
        <div className="w-[280px] mt-[82px] fixed right-0">
            <div className="">
                <Typography className="px-4 border-b py-3 text-center font-medium">Our Tags</Typography>
                <div className="h-[200px] overflow-x-hidden overflow-y-auto py-4" id="rightTags">
                    {postTags?.map(tag => <Typography className="font-normal text-blue-gray-600 py-2 px-4 border-b flex items-center gap-2" key={tag?._id}><ImPriceTags />{tag?.label}</Typography>)}
                </div>
            </div>
        </div>
    );
};

export default RightSidebar;