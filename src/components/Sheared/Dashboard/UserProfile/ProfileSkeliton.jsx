import Skeleton from "react-loading-skeleton";

const ProfileSkeliton = () => {
    return (
        <div className="flex items-center gap-5 rounded-md">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-3">
                <Skeleton height='100%' width='100%' />
            </div>
            <div className="flex items-start flex-col space-y-2">
                <div className="w-[200px]">
                    <Skeleton height='30px' width='100%' />
                </div>
                <div className="w-[200px]">
                    <Skeleton count={2} height='20px' width='100%' />
                </div>
                <div className="w-[200px]">
                <Skeleton count={2} height='20px' width='100%' />
                </div>
                <div className="w-[200px]">
                <Skeleton height='30px' width='100%' />
                </div>
            </div>
        </div>
    );
};

export default ProfileSkeliton;