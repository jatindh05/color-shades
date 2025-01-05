import React, { useEffect } from "react";
import { usePalette } from "color-thief-react";
import { useSelector } from "react-redux";
import Loader from "./loader/Loader";
import { useDispatch } from "react-redux";
import { setPalette } from "../store/slice/paletteSlice";
import { Toaster, toast } from "react-hot-toast";
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { addToFav } from "../firebase/firebaseUtils";
import { FaCopy } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";

const ColorShade = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const selectedImage = useSelector((state) => state.image.selectedImage);
    const [favColors, setFavColors] = React.useState({});

    let crossOrigin = "Anonymous";
    let quality = 10;

    const { data, loading, error } = usePalette(selectedImage, 6, "hex", {
        crossOrigin,
        quality,
    });

    const favClickHandler = (name, color) => {
        const auth = getAuth();
        const user = auth.currentUser;

        if (!user) {
            toast.error("Please login to add favorites");
            navigate("/login");
            return;
        }

        toast("Added to favorites", {
            icon: "❤️",
        });
        setFavColors((prevColors) => ({
            ...prevColors,
            [color]: !prevColors[color],
        }));
        addToFav(color, name);
    };

    useEffect(() => {
        if (error && selectedImage !== null) {
            toast.error("Something went wrong");
        }

        if (data) {
            dispatch(setPalette(data));
        }
    }, [error, data]);

    const handleColorClick = (color) => {
        navigator.clipboard.writeText(color);
        toast.success("Copied to clipboard");
    };

    return (
        <div className="flex flex-col items-center">
            <Toaster />
            {loading ? (
                <Loader />
            ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
                    {data?.map((color, index) => (
                        <div
                            key={index}
                            className="relative flex items-end justify-center rounded-md transition-transform transform hover:scale-105 hover:shadow-lg"
                            style={{ backgroundColor: color, height: '150px', width: '150px' }}
                        >
                            <div className="absolute top-2 right-2 z-50">
                                {favColors[color] ? (
                                    <FaHeart
                                        className="cursor-pointer text-red-500"
                                        onClick={() => favClickHandler(color, color)}
                                    />
                                ) : (
                                    <FaRegHeart
                                        className="cursor-pointer text-white"
                                        onClick={() => favClickHandler(color, color)}
                                    />
                                )}
                            </div>
                            <p
                                className="cursor-pointer flex items-center justify-between p-2 w-full text-center font-semibold text-white bg-black bg-opacity-50 rounded-b-md"
                                onClick={() => handleColorClick(color)}
                            >
                                <FaCopy /> {color}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ColorShade;