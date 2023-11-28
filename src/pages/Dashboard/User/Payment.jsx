import { loadStripe } from "@stripe/stripe-js";
import DashboardContainer from "../../../components/Sheared/Dashboard/DashboardContainer/DashboardContainer";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "../../../components/Dashboard/Admin/Payment/PaymentForm";
import { Typography } from "@material-tailwind/react";

const stripeKey = loadStripe(import.meta.env.VITE_STRIPE_KEY);
const Payment = () => {
    return (
        <DashboardContainer title='Membership Payment Page'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1">
                    <Typography className="font-normal text-blue-gray-600">Congratulations on deciding to elevate your experience on our site! By becoming a member, you unlock exclusive benefits that enhance your participation and engagement. Here is what you gain:</Typography>
                    <Typography className="font-normal text-blue-gray-600"><span className="text-blue-500 font-medium">Gold Badge:</span> Display your commitment and status with a prestigious Gold badge next </Typography>
                    <Typography className="font-normal text-blue-gray-600"><span className="text-blue-500 font-medium"> Increased Posting Limit:</span> Enjoy the freedom to create more than 5 posts, enabling you to share more, connect better, and contribute extensively. </Typography>
                    <Typography className="font-normal text-blue-gray-600"><span className="text-blue-500 font-medium"> Membership Fee:</span> $50 Taka/Dollar</Typography>
                    <Typography className="font-normal text-blue-gray-600">Your support helps us maintain and improve the community, ensuring a vibrant and valuable experience for all members.</Typography>
                    <Typography className="font-normal text-blue-gray-600">Thank you for choosing to be a part of our exclusive community!</Typography>
                </div>
                <div>
                    <Elements stripe={stripeKey}>
                        <PaymentForm />
                    </Elements>
                </div>
            </div>
        </DashboardContainer>
    );
};

export default Payment;