import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar"

const CategoriesPage = () => {

 const categories = [
  { name: "Animals", color: "from-pink-400 to-red-400", icon: "https://img.icons8.com/color/96/lion.png" },
  { name: "Cartoons", color: "from-yellow-400 to-orange-400", icon: "https://img.icons8.com/color/96/tv.png" },
  { name: "Maths", color: "from-blue-400 to-indigo-500", icon: "https://img.icons8.com/color/96/calculator.png" },
  { name: "Science", color: "from-green-400 to-teal-500", icon: "https://img.icons8.com/color/96/test-tube.png" },
  { name: "Games", color: "from-purple-400 to-pink-500", icon: "https://img.icons8.com/color/96/controller.png" },
  { name: "Sports", color: "from-lime-400 to-green-500", icon: "https://img.icons8.com/color/96/trophy.png" },
  { name: "Space", color: "from-indigo-500 to-purple-500", icon: "https://img.icons8.com/color/96/rocket.png" },
  { name: "General Knowledge", color: "from-red-400 to-yellow-400", icon: "https://img.icons8.com/color/96/light-on.png" },
  { name: "Fruits", color: "from-rose-400 to-pink-500", icon: "https://img.icons8.com/color/96/apple.png" },
  { name: "Flags", color: "from-blue-500 to-sky-400", icon: "https://img.icons8.com/color/96/worldwide-location.png" },
];


  return (
    <div className=" animate-fade-in min-h-screen bg-linear-to-br from-blue-100 to-purple-100 px-4 py-10">

      <h1 className="text-4xl sm:text-5xl text-center font-extrabold text-purple-700 mb-6">
        Choose Your Category 🎮
      </h1>

      <p className="text-center text-gray-700 text-lg mb-10">
        Pick one and start your adventure! 🚀
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

        {categories.map((cat) => (
          <Link to={`/quiz/${cat.name}`} key={cat.name}>
            <div
              className={`
                bg-linear-to-br ${cat.color}
                w-full h-36 sm:h-40 rounded-3xl 
                shadow-xl hover:shadow-2xl 
                hover:-translate-y-2 hover:scale-105 
                transition-all duration-300 cursor-pointer
                flex flex-col items-center justify-center text-white
              `}
            >
              <img src={cat.icon} className="w-12 mb-2 drop-shadow-md" />
              <p className="text-lg sm:text-xl font-bold">{cat.name}</p>
            </div>
          </Link>
        ))}

      </div>

    </div>
  );
};

export default CategoriesPage;
