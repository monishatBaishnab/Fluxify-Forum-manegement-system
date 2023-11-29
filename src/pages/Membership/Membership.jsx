import { Typography } from "@material-tailwind/react";

const Membership = () => {
    return (
        <div className="container py-5 min-h-[calc(100vh_-_85px)] space-y-3">
            <Typography color="blue" className="font-medium text-center" variant="h3">Explore Exclusive Memberships</Typography>
            <Typography className="font-normal text-blue-gray-600">Unlock a world of premium benefits with our exclusive membership options. Whether you choose Gold for the ultimate VIP experience or Bronze for enhanced community perks, discover the power of membership. Elevate your journey, connect with like-minded individuals, and enjoy a tailored experience that goes beyond the ordinary. Join us and become part of something extraordinary.</Typography>
            <div>
                <Typography color="blue" className="font-normal" variant="h5">Gold Membership</Typography>
                <Typography className="font-normal text-blue-gray-600">Welcome to the elite circle! The Gold Membership offers a premium experience tailored for our most dedicated members. By choosing Gold, you unlock a wealth of exclusive benefits</Typography>
                <ul className="list-decimal text-blue-gray-600 text-base ml-4">
                    <li>Gold Badge</li>
                    <li>Unlimited Access</li>
                    <li>Priority Support</li>
                    <li>Special Events and Offers</li>
                    <li>Increased Posting Limit</li>
                </ul>
            </div>
            <div className="space-y-2">
                <Typography color="blue" className="font-normal" variant="h5">Bronze Membership</Typography>
                <Typography className="font-normal text-blue-gray-600">Discover the enhanced benefits of being a Bronze Member! This membership level is designed to offer valuable perks to our community enthusiasts.</Typography>
                <Typography color="blue" className="font-normal">{`Here's what you get:`}</Typography>
                <ul className="list-decimal text-blue-gray-600 text-base ml-4">
                    <li>Bronze Badge</li>
                    <li>Access to Exclusive Content</li>
                    <li>Community Recognition</li>
                    <li>Regular Updates</li>
                    <li>Moderate Posting Limit</li>
                </ul>
            </div>
        </div>
    );
};

export default Membership;