import { Button } from "@material-tailwind/react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const [stripeSecret, setStripeSecret] = useState('');
    const { user } = useAuth();
    const price = 50;
    const navigate = useNavigate();
    const [paymentLoading, setPaymentLoading] = useState(false);

    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price })
            .then(res => setStripeSecret(res?.data?.clientSecret));
    }, [axiosSecure])


    const handleCheckout = async (e) => {
        e.preventDefault();
        setPaymentLoading(true);

        if (!stripe || !elements) {
            console.log('Stripe or Elements not found');
            setPaymentLoading(false);
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            console.log('Card is Null');
            setPaymentLoading(false);
            return;
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log(error);
            setPaymentLoading(false);
        }

        const { paymentIntent, error: paymentIntentError } = await stripe.confirmCardPayment(stripeSecret, {
            payment_method: {
                card,
                billing_details: {
                    name: user?.displayName || 'anonymous',
                    email: user?.email || 'anonymous'
                }
            }
        })

        if (paymentIntentError) {
            console.log(paymentIntentError);
            setPaymentLoading(false);
        } else {
            if (paymentIntent?.status === 'succeeded') {
                try {
                    await axiosSecure.patch(`/users?email=${user?.email}`, { badge: 'Gold' });
                    setPaymentLoading(false);
                    toast.success('Payment Success.');
                    navigate('/dashboard/user-profile');
                } catch (error) {
                    setPaymentLoading(false);
                    console.log(error);
                }
            }
        }
    }
    return (
        <form onSubmit={handleCheckout}>
            <CardElement
                className="p-2 border rounded-md flex flex-col"
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <Button type="submit" color="blue" className="mt-3">{paymentLoading ? <FaSpinner className="animate-spin text-lg" /> : 'Checkout'}</Button>
        </form>
    );
};

export default PaymentForm;