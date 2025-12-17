import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (

        <div className="min-h-screen animate-fade-in bg-animate bg-linear-to-br from-pink-100 to-yellow-100 flex flex-col">
              
    
            <div className="grow flex flex-col items-center justify-center text-center px-4 sm:px-10">

                <h1 className="text-5xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow mb-4">
                🚀 Adventure Begins with Every Question!     
                </h1>

                <p className="text-xl  sm:text-xl text-white drop-shadow mb-8 font-medium max-w-xl">
                    Fun learning for kids and everyone! Ready to play? 😊
                </p>

                <Link to="/categories">
                    <button className="px-10 py-4 bg-black/40 text-white backdrop-blur-md border border-white/20 rounded-full text-xl font-bold shadow-lg hover:scale-110 transition">
                        Start Playing 🎈
                    </button>
                </Link>

            </div>

        </div>

    );
};

export default HomePage;
