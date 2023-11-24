import { Option, Select, Typography } from "@material-tailwind/react";

const RightSidebar = () => {
    const postTags = [
        'Innovation',
        'Coding',
        'ArtificialIntelligence',
        'HealthAndWellness',
        'Adventure',
        'BookRecommendation',
        'DigitalArt',
        'GamingCommunity',
        'MovieReview',
        'FoodieLife',
        'OnlineLearning',
        'SocialJustice',
        'MusicLovers',
        'FashionInspiration',
        'SportsTalk',
    ];


    return (
        <div className="w-[280px] mt-[80px] fixed right-0">
            <div className="">
                <Typography className="px-4 border-b py-3 text-center font-medium">Our Tags</Typography>
                <div className="p-5">
                    <Select label="Select Tags">
                        {postTags.map(tag => <Option key={tag}>{tag}</Option>)}
                    </Select>
                </div>
            </div>
        </div>
    );
};

export default RightSidebar;