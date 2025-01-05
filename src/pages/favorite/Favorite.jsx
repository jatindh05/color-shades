import { useEffect, useState } from "react";
import { getFavColors, deleteFavColor } from "../../firebase/firebaseUtils";
import { toast, Toaster } from "react-hot-toast";
import { RiDeleteBin5Line } from "react-icons/ri";
import Loader from "../../components/loader/Loader";
import { FaCopy } from "react-icons/fa6";

const Favorite = () => {
    const [favColors, setFavColors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFavColors = async () => {
            const colors = await getFavColors();
            setFavColors(colors);
            setLoading(false);
        };

        fetchFavColors();
    }, []);

    const handleColorClick = (color) => {
        navigator.clipboard.writeText(color);
        toast.success("Copied to clipboard");
    };

    const handleDelete = async (color) => {
        await deleteFavColor(color);
        toast.error("Color deleted");

        // Update the UI by fetching and setting the updated list of favorite colors
        const updatedColors = await getFavColors();
        setFavColors(updatedColors);
    };

    return (
        <div className="mt-20 flex items-center justify-center w-full px-5 lg:px-10">
            <Toaster />
            {loading ? (
                <Loader />
            ) : favColors && favColors.length > 0 ? (
                <div className="mt-10 flex flex-wrap justify-center gap-5">
                    {favColors.map((color) => (
                        <div
                            className="relative flex flex-col items-center group"
                            key={color.id}
                        >
                            <div
                                className="w-32 h-32 sm:h-56 lg:h-80 flex justify-center items-center rounded-md transition-transform transform hover:scale-105"
                                style={{ backgroundColor: color.code }}
                            >
                                <div className="flex gap-5 group-hover:visible invisible transition-all">
                                    <RiDeleteBin5Line
                                        className="text-xl cursor-pointer text-white hover:text-red-500"
                                        onClick={() => {
                                            handleDelete(color.code);
                                        }}
                                    />
                                    <FaCopy
                                        className="text-xl cursor-pointer text-white hover:text-blue-500"
                                        onClick={() => {
                                            handleColorClick(color.code);
                                        }}
                                    />
                                </div>
                            </div>
                            <p className="mt-2 text-center cursor-pointer group-hover:font-bold font-semibold text-black">
                                {color.colorName}
                            </p>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="mt-20 flex justify-center">
                    <h1 className="text-3xl font-bold">No Favorites</h1>
                </div>
            )}
        </div>
    );
};

export default Favorite;