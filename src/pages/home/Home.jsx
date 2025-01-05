import React from "react";
import { useNavigate } from "react-router-dom";
import headerImg from "../../assets/headimg.jpg";
import { getAuth } from "firebase/auth";
import { toast } from "react-hot-toast";

const Home = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        const auth = getAuth();
        const user = auth.currentUser;

        if (!user) {
            toast.error("Please login!!");
            navigate("/login");
            return;
        }

        navigate(path);
    };

    return (
        <div className="flex flex-col lg:flex-row h-full items-center px-5 lg:px-20 gap-10 lg:gap-0 ">
            {/* Description Section */}
            <div className="flex flex-col lg:w-1/2 gap-8 justify-center items-center text-center lg:text-left">
                <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight text-indigo-800">
                    Effortlessly Craft Beautiful Color Combinations
                </h1>
                <p className="text-lg lg:text-xl text-gray-600">
                    Unleash limitless creativity with our quick and user-friendly palette generator. Find inspiration in the latest color trends!
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <button
                        className="px-6 py-3 rounded-md font-semibold border border-gray-400 text-white bg-indigo-600 hover:bg-indigo-700 transition-all"
                        onClick={() => handleNavigation("/generate")}
                    >
                        Generate Palettes from Image
                    </button>
                    <button
                        onClick={() => handleNavigation("/explore")}
                        className="rounded-md p-2 font-semibold border border-gray-400 text-white bg-indigo-600 hover:bg-indigo-700 transition-all"
                    >
                        Explore Trending Palettes
                    </button>
                </div>
            </div>

            {/* Image Section */}
            <div className="flex justify-center items-center lg:w-1/2 mt-10 lg:mt-0">
                <img
                    className="w-full max-w-md lg:max-w-lg rounded-lg shadow-lg"
                    src={headerImg}
                    alt="Header"
                />
            </div>
        </div>
    );
};

export default Home;
