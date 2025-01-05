import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { auth } from "../firebase/firebase";

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isMenuHidden, setMenuHidden] = React.useState(true);
    const [user, setUser] = React.useState(false);

    React.useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(!!user?.uid);
        });

        // Cleanup subscription on component unmount
        return () => unsubscribe();
    }, []);

    const toggleMenu = () => setMenuHidden(!isMenuHidden);

    const handleNavigation = (path) => {
        setMenuHidden(true);
        navigate(path);
    };

    return (
        <nav className="z-50 fixed top-0 left-0 w-full py-4 px-6 md:px-10 bg-white shadow-lg text-gray-800">
            <div className="flex justify-between items-center">
                {/* Logo */}
                <h1
                    className="text-2xl md:text-3xl font-bold cursor-pointer text-indigo-700 transition-all hover:text-indigo-600"
                    onClick={() => handleNavigation("/")}
                >
                    Color <span className="text-blue-500">Shades</span>
                </h1>

                {/* Mobile Menu Button */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 cursor-pointer md:hidden block"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    onClick={toggleMenu}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>

                {/* Desktop Menu */}
                <div
                    className={`absolute md:relative top-16 md:top-0 right-0 md:right-auto w-full md:w-auto bg-white shadow-lg md:shadow-none py-4 md:py-0 px-6 md:px-0 md:flex md:items-center md:gap-8 ${isMenuHidden ? "hidden" : "block"
                        }`}
                >
                    <ul className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
                        {user && (
                            <li
                                className="font-medium text-lg cursor-pointer hover:text-indigo-600 transition-all"
                                onClick={() => handleNavigation("/favourite")}
                            >
                                Favourite
                            </li>
                        )}
                        <li>
                            {location.pathname !== "/login" && (
                                !user ? (
                                    <button
                                        className="rounded-md py-2 px-3 font-semibold border border-gray-400 text-white bg-indigo-600 hover:bg-indigo-700 transition-all"
                                        onClick={() => handleNavigation("/login")}
                                    >
                                        Login
                                    </button>
                                ) : (
                                    <button
                                        className="rounded-md bg-blue-800 text-white p-2 font-semibold hover:bg-blue-700 transition-all"
                                        onClick={() => {
                                            auth.signOut();
                                            handleNavigation("/");
                                        }}
                                    >
                                        Logout
                                    </button>
                                )
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;