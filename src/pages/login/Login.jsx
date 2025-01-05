import React from "react";
import { auth } from "../../firebase/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import loginBanner from "../../assets/Login.jpg";
import { FaGoogle } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";

const Login = () => {
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();

    // Handle Google Sign-In
    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, provider);
            toast.success("Login successful!");
            navigate("/");
        } catch (error) {
            console.error("An error occurred during login:", error);
            toast.error("Login failed. Please try again!");
        }
    };

    return (
        <div className="flex flex-col lg:flex-row h-screen">
            <Toaster /> {/* Toast notifications */}

            {/* Left Section: Banner */}
            <div
                className="hidden lg:flex flex-1 items-center justify-center bg-cover bg-center"
                style={{
                    backgroundImage: `url(${loginBanner})`,
                }}
            >
                <div className="bg-black bg-opacity-50 text-white p-6 rounded-lg backdrop-blur-md text-center max-w-md">
                    <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
                    <p className="text-lg">
                        Discover beautiful color palettes and manage your favorites effortlessly.
                    </p>
                </div>
            </div>

            {/* Right Section: Login Form */}
            <div className="flex flex-1 items-center justify-center bg-gray-50">
                <div className="w-full max-w-sm p-8 rounded-xl shadow-lg bg-white">
                    <h2 className="text-3xl font-extrabold text-center text-indigo-700 mb-6">
                        Sign In
                    </h2>
                    <p className="text-center text-gray-500 mb-8">
                        Sign in to start exploring stunning color palettes.
                    </p>

                    <div
                        className="flex items-center justify-center gap-3 w-full py-3 border border-gray-300 rounded-lg cursor-pointer transition-all hover:bg-indigo-600 hover:text-white active:scale-95"
                        onClick={signInWithGoogle}
                    >
                        <FaGoogle size={22} />
                        <span className="font-medium">Login with Google</span>
                    </div>

                    <div className="mt-6 text-sm text-center text-gray-500">
                        By signing in, you agree to our{" "}
                        <span className="text-indigo-600 hover:underline">
                            Terms of Service
                        </span>{" "}
                        and{" "}
                        <span  className="text-indigo-600 hover:underline">
                            Privacy Policy
                        </span>.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
