import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.href = "/login";
    };

    return (
        <div className="bg-linear-to-br from-fuchsia-300 to-indigo-400">

            <nav className="px-6 py-4 backdrop-blur-md shadow-md rounded-2xl">
                <div className="flex justify-between items-center">

                    <img src="/logo.png" alt="Logo" className="w-16 rounded-full" />

                    <button
                        className="text-3xl sm:hidden"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? "✖" : "☰"}
                    </button>

                    <ul className="hidden sm:flex gap-6 text-gray-700 font-medium text-lg">
                        <Link to="/" className="hover:text-pink-500">Home</Link>
                        <Link to="/categories" className="hover:text-pink-500">Categories</Link>
                        <Link to="/profile" className="hover:text-pink-500">Profile</Link>
                        <p
                            className="hover:text-red-500 cursor-pointer"
                            onClick={handleLogout}
                        >
                            Logout
                        </p>
                    </ul>
                </div>

                {menuOpen && (
                    <ul className="flex flex-col gap-4 mt-4 text-gray-700 font-medium text-lg sm:hidden">
                        <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-pink-500">Home</Link>
                        <Link to="/categories" onClick={() => setMenuOpen(false)} className="hover:text-pink-500">Categories</Link>
                        <Link to="/profile" onClick={() => setMenuOpen(false)} className="hover:text-pink-500">Profile</Link>
                        <p className="hover:text-red-500 cursor-pointer" onClick={handleLogout}
                        >Logout</p>
                    </ul>
                )}

            </nav>
        </div>
        )
};

export default Navbar