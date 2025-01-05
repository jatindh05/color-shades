import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetImage, resetPalette } from "../../store/slice/paletteSlice";
import ColorShade from "../../components/ColorShade.jsx";
import UploadImageSection from "../../components/UploadImageSection.jsx";
import genimage from "../../assets/genimage.webp";

const Generate = () => {
    const dispatch = useDispatch();
    const selectedImage = useSelector((state) => state.image.selectedImage);
    const palette = useSelector((state) => state.image.palette);

    useEffect(() => {
        return () => {
            dispatch(resetImage());
            dispatch(resetPalette());
        };
    }, [dispatch]);

    return (
        <div className="flex flex-col items-center justify-center mt-20 px-5 lg:px-0 gap-10">
            {!selectedImage && (
                <div className="flex flex-col items-center justify-center gap-5">
                    <img
                        className="h-auto max-w-full lg:h-96 object-cover rounded-lg shadow-lg"
                        src={genimage}
                        alt="genimage"
                    />
                    <h1 className="text-3xl lg:text-5xl text-center font-semibold">
                        Extract Color Palette from Image
                    </h1>
                </div>
            )}
            <UploadImageSection />
            <ColorShade />
        </div>
    );
};

export default Generate;