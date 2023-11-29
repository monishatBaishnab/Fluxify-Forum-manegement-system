import { Button, Typography } from '@material-tailwind/react';
import notFound from '../../assets/nofound.svg';
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <div className='flex items-center justify-center flex-col min-h-screen'>
            <div>
                <img src={notFound} alt="" />
            </div>
                <Typography variant='h4' className='text-blue-gray-700'>Oops! Page Not Found (404 Error)</Typography>
            <div className='flex items-center gap-2 mt-3'>
                <Button onClick={() => navigate(-1)} className='bg-blue-gray-100 text-blue-gray-700 flex items-center gap-2'><IoMdArrowRoundBack className='text-lg' /> Go Back</Button>
                <Button onClick={() => navigate('/')} color='blue' className='flex items-center gap-2'><FaHome className='text-lg' />Go Home</Button>
            </div>
        </div>
    );
};

export default ErrorPage;