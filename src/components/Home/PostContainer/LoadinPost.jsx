import Skeleton from "react-loading-skeleton";

const LoadinPost = () => {
    const arr = [...Array(4).keys()];
    return (
        arr.map((id) => <div key={id} className="p-5 rounded-lg mt-5 bg-white flex gap-5">
            <div className="w-[56px] h-[56px] md:w-[156px] md:h-[156px] overflow-hidden rounded ">
                <Skeleton width='100%' height='100%' />
            </div>
            <div className="w-full">
                <div className="mb-3 md:mt-0">
                    <Skeleton height='30px' width='100%' />
                </div>
                <Skeleton height='20px' width='100%' count='1' />
                <div className="flex gap-5 mt-5">
                    <div className="basis-1/2"><Skeleton height='30px' width='100%' /></div>
                    <div className="basis-1/2"><Skeleton height='30px' width='100%' /></div>
                </div>
            </div>
        </div>)
    );
};

export default LoadinPost;