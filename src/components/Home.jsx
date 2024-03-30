import Hero from "../assets/Hero.avif";
import Hero2 from "../assets/Hero2.avif";
import { IoIosArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b  from-black via-black to-gray-800 overflow-y-auto"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Hey, I am Vipul Tapare
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Currently Pursuing Master's in Computer Application at Vellore
            Institute Of Technology, Chennai
          </p>
          <div>
            <Link
              to="/portfolio"
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <IoIosArrowDropright className="size-5 ml-1 " />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            className="rounded-3xl sm:h-64 lg:h-auto"
            src={Hero2}
            alt="My Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
