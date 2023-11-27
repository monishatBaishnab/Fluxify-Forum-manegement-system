import { ImSpinner9 } from "react-icons/im";

const FetchLoading = () => {
    return (
        <div className="flex items-center justify-center h-full py-5">
            <ImSpinner9 className="text-5xl animate-spin text-blue-500" />
        </div>
    );
};

export default FetchLoading;