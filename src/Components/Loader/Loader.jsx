import { ScaleLoader } from "react-spinners";

const Loader = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-[calc(100vh-116px)]">
            <ScaleLoader aria-setsize={200} color='#f92fd3'/>
            
        </div>
    );
};

export default Loader;