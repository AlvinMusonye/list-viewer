import React, { useState } from "react";
import "../Styles/Navbar.css"
import Logo from "../assets/Buchlogo lesen _ Premium Vektor.jpeg"; 

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="w-full bg-white text-black py-4 px-5 md:px-32 shadow-md">
            <div className="flex justify-between items-center">
                <img
                    src="src/assets/Buchlogo lesen _ Premium Vektor.jpeg"
                    alt="My Logo"
                    className="w-20 cursor-pointer hover:scale-105 transition-transform"
                />

                <nav className="hidden xl:flex items-center gap-12 font-semibold text-base">
                    <a href="#" className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all">
                        Home
                    </a>
                    <a href="#" className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all">
                        Products
                    </a>
                    <a href="#" className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all">
                        Features
                    </a>
                    <a href="#" className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all">
                        About
                    </a>
                </nav>

                <div className="relative hidden md:flex items-center">
                    <i className="bx bx-search absolute left-3 text-2xl text-gray-500"></i>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="py-2 pl-10 rounded-xl border border-blue-300 focus:bg-slate-100 focus:outline-sky-500"
                    />
                </div>

                <button
                    className="xl:hidden text-3xl cursor-pointer"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <i className="bx bx-menu"></i>
                </button>
            </div>

            <nav
                className={`xl:hidden absolute top-16 left-0 w-full bg-white flex flex-col items-center gap-4 font-semibold text-lg transition-all duration-300 ${
                    isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                }`}
            >
                <a href="#" className="w-full text-center py-3 hover:bg-sky-400 hover:text-white transition-all">
                    Home
                </a>
                <a href="#" className="w-full text-center py-3 hover:bg-sky-400 hover:text-white transition-all">
                    Books
                </a>
                <a href="#" className="w-full text-center py-3 hover:bg-sky-400 hover:text-white transition-all">
                    Features
                </a>
                <a href="#" className="w-full text-center py-3 hover:bg-sky-400 hover:text-white transition-all">
                    About
                </a>
            </nav>
        </header>
    );
};

export default Navbar;
