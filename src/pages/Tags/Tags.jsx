import { Typography } from "@material-tailwind/react";
import { IoMdPricetags } from "react-icons/io";
const tagsData = [
    { tag: "Popularity", desc: "Explore trends and popular topics globally. Stay updated on what's buzzing.", num_posts: 150 },
    { tag: "Innovation", desc: "Discover cutting-edge ideas and tech innovations. Join the forefront of technology.", num_posts: 75 },
    { tag: "Coding", desc: "Discuss coding, algorithms, and challenges. Dive into the world of programming.", num_posts: 120 },
    { tag: "ArtificialIntelligence", desc: "Explore the latest AI advancements and discussions. Unleash the power of AI.", num_posts: 50 },
    { tag: "HealthAndWellness", desc: "Find tips for a healthy lifestyle. Enhance your well-being with wellness insights.", num_posts: 100 },
    { tag: "Adventure", desc: "Embark on thrilling adventures and share your exciting stories with fellow adventurers.", num_posts: 80 },
    { tag: "BookRecommendation", desc: "Recommend and discover great reads from various genres. Join the bookish community.", num_posts: 90 },
    { tag: "DigitalArt", desc: "Showcase your creative digital artworks. Explore the world of digital artistry.", num_posts: 60 },
    { tag: "GamingCommunity", desc: "Connect with fellow gamers and discuss the latest in the gaming world. Game on!", num_posts: 110 },
    { tag: "MovieReview", desc: "Share and explore film critiques. Discover the latest in the world of cinema.", num_posts: 70 },
    { tag: "FoodieLife", desc: "Indulge in culinary delights and share your foodie experiences. Savor the flavors!", num_posts: 130 },
    { tag: "OnlineLearning", desc: "Explore online resources for continuous learning. Expand your knowledge base.", num_posts: 95 },
    { tag: "SocialJustice", desc: "Advocate for equality and discuss social justice issues. Stand for justice.", num_posts: 85 },
    { tag: "MusicLovers", desc: "Express your love for music and discover new melodic inspirations. Let the music play.", num_posts: 110 },
    { tag: "FashionInspiration", desc: "Get inspired and share stylish ideas. Embrace the latest fashion trends.", num_posts: 75 },
    { tag: "SportsTalk", desc: "Engage in discussions about various sports and athletic events. Play hard, talk sports.", num_posts: 105 },
    { tag: "Entrepreneurship", desc: "Exchange insights and experiences in the world of entrepreneurship. Innovate and succeed.", num_posts: 65 },
    { tag: "hello", desc: "A generic tag for miscellaneous discussions. Say hello to diverse conversations.", num_posts: 40 }
  ];
  


const Tags = () => {
    return (
        <div className="container py-5 min-h-[calc(100vh_-_85px)] space-y-3">
            <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
                {
                    tagsData?.map(tag => <div key={tag?.desc} className="p-5 bg-white rounded-md space-y-3 border">
                        <div className="flex items-center justify-between">
                            <Typography className="font-normal flex items-center gap-2"><IoMdPricetags /> <span className="px-2 bg-blue-500/20 rounded-sm">{tag?.tag}</span></Typography>
                            <Typography className="font-normal text-sm">Post: {tag?.num_posts}</Typography>
                        </div>
                        <div>
                            <Typography className="font-normal text-sm">{tag?.desc}</Typography>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Tags;