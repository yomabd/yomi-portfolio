import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import myPic from "../assets/Mypic.jpg";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="min-h-screen w-full pt-40 bg-gradient-to-b from-black via-black to-gray-800 text-white pb-12"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2
            className="text-6xl 
          md:text-7xl font-bold"
          >
            &#128075; Welcome to my Page
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I am a software Engineer and a Google-certified IT support
            specialist. I creates websites that are both visually stunning and
            tailored to your preferences. I am capable of automating computer
            tasks to aid productivity.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              offset={-60}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center border-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <RiArrowRightSLine size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="">
          <img
            className="mx-auto w-2/3 md:w-full  rounded-full"
            src={myPic}
            alt="my profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
