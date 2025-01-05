import React from "react";
import { FaCopy } from "react-icons/fa6";
import { IoGridSharp } from "react-icons/io5";
import { Toaster, toast } from "react-hot-toast";
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { addToFav } from "../../firebase/firebaseUtils";

const ColorBox = ({ shades, background, name, shadeNames, category }) => {

    const [favColors, setFavColors] = React.useState(false);
    const [showAllShades, setShowAllShades] = React.useState(false);
    const [currentColor, setCurrentColor] = React.useState(background);
    const [currentName, setCurrentName] = React.useState(name);

    React.useEffect(() => {
        setCurrentColor(background);
        setCurrentName(name);
    }, [shades, background]);

    console.log(shadeNames)

    const handleColorClick = (color) => {
        navigator.clipboard.writeText(color);
        toast.success("Copied to clipboard");
    };

    const handleShowAllShades = (shade) => {
        setShowAllShades(!showAllShades);
    };



    const favClickHandler = () => {
        toast("Added to favorites", {
            icon: "❤️"
        })
        setFavColors(!favColors);
        addToFav(currentColor, name);
    };

    return (
        <div className="flex flex-col items-center justify-center w-full h-36 lg:max-3xl:h-full transition-transform transform hover:scale-105 rounded-lg overflow-hidden">
            <div>
                <Toaster />
            </div>

            {showAllShades ? (
                <div className="flex lg:max-3xl:flex-col h-full w-full">
                    {shades?.map((shade, index) => (
                        <div
                            key={index}
                            onClick={() => {
                                setCurrentColor(shade);
                                setCurrentName(`${category} ${shadeNames[index]}`);
                                setShowAllShades(!showAllShades);
                            }}
                            className="z-50 w-full h-full lg:max-3xl:h-1/6 flex justify-center items-center cursor-pointer transition-all duration-300"
                            style={{ backgroundColor: shade }}
                        >
                            {currentColor === shade ? (
                                <p className="font-semibold lg:max-3xl:block hidden text-md text-white">
                                    Current Color
                                </p>
                            ) : (
                                    <p className="lg:max-3xl:block hidden text-md text-white">
                                    {shade}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            ) : (
                <div
                    className="flex flex-col items-center justify-around w-full h-full group"
                    style={{ backgroundColor: currentColor }}
                >
                        <div className="flex lg:max-3xl:flex-col gap-5 group-hover:visible invisible transition-all">
                        <IoGridSharp
                                className="text-2xl text-white cursor-pointer"
                            onClick={handleShowAllShades}
                        />
                        <FaCopy
                                className="text-xl text-white cursor-pointer"
                            onClick={() => {
                                handleColorClick(currentColor);
                            }}
                        />

                        {
                                favColors ? (<FaHeart className="text-xl text-red-500 cursor-pointer" />) : (<FaRegHeart
                                    className="text-xl text-white cursor-pointer"
                                onClick={() => {
                                    favClickHandler();
                                }}
                            />)
                        }



                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <h3 className="lg:max-3xl:block hidden font-semibold text-2xl text-white">
                            {currentColor}
                        </h3>
                        <p className="lg:max-3xl:block hidden text-md text-white">
                            {currentName}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ColorBox;