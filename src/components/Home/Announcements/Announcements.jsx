import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import { Typography } from '@material-tailwind/react';
import PropTypes from 'prop-types';

const Announcements = ({ announcements }) => {

    return (
        <div className='overflow-hidden flex items-center justify-center bg-white mb-5 rounded-lg min-h-[150px] max-w-[calc(100vw_-_40px)] md:max-w-[calc(100vw_-_80px)] lg:max-w-[calc(100vw_-_660px)]'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    announcements?.map(announcement =>
                        <SwiperSlide key={announcement?._id}>
                            <div className='flex flex-col px-5 md:px-10 py-5 space-y-2'>
                                <Typography className='text-primary text-center font-medium mb-2' variant='h4'>{announcement?.title}</Typography>
                                <Typography className='font-normal text-blue-gray-600' variant='small'>{announcement?.description}</Typography>
                                <Typography className='font-normal text-blue-gray-600'>Author: {announcement?.user?.email}</Typography>
                            </div>
                        </SwiperSlide>)
                }

            </Swiper>
        </div>
    );
};

Announcements.propTypes = {
    announcements: PropTypes.array,
}

export default Announcements;