import { ImSpinner9 } from "react-icons/im";

const LoadingPage = () => {
    return (
        <div className="flex items-center justify-center fixed z-50 left-0 right-0 top-0 bottom-0 bg-white">
            <ImSpinner9 className="animate-spin text-5xl text-primary" />
        </div>
    );
};

export default LoadingPage;