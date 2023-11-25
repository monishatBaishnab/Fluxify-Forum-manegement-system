import Skeleton from "react-loading-skeleton";

const LoadingPostDetails = () => {
    return (
        <div className="space-y-5">
            <div>
                <Skeleton width='100%' height='30px' />
            </div>
            <div className="w-full h-[400px] overflow-hidden rounded ">
                <Skeleton width='100%' height='100%' />
            </div>
            <div className="w-full">
                <div className="flex gap-5 my-5">
                    <div className="basis-1/2"><Skeleton height='30px' width='100%' /></div>
                    <div className="basis-1/2"><Skeleton height='30px' width='100%' /></div>
                </div>
                <Skeleton height='100px' width='100%' count='1' />
                <div className="flex gap-5 mt-5">
                    <div className="basis-1/2"><Skeleton height='30px' width='100%' /></div>
                    <div className="basis-1/2"><Skeleton height='30px' width='100%' /></div>
                </div>
            </div>
        </div>
    );
};

export default LoadingPostDetails;