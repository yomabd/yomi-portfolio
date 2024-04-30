import React from "react";
import huddle from "../assets/huddle.png";
import rock from "../assets/rock-paper-scissor-game.png";
import flexGrid from "../assets/flex-and-grid-ayoout.png";
import regPage from "../assets/Responsive registration page.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: regPage,
      demo: "https://yomabd.github.io/responsive-registration-form/",
      code: "https://github.com/yomabd/responsive-registration-form",
    },
    {
      id: 2,
      src: flexGrid,
      demo: "https://yomabd.github.io/flex-and-grid-layout/",
      code: "https://github.com/yomabd/flex-and-grid-layout",
    },
    {
      id: 3,
      src: rock,
      demo: "https://github.com/yomabd/Rock_Paper_Scissor_Game",
      code: "https://github.com/yomabd/Rock_Paper_Scissor_Game",
    },
    {
      id: 4,
      src: huddle,
      demo: "https://yomabd.github.io/responsive-huddle-front-end/",
      code: "https://github.com/yomabd/responsive-huddle-front-end",
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="py-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check some of my works here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 m-4 duration-200 hover:scale-105">
                  <a href={demo} alt="" target="_blank">
                    Demo
                  </a>
                </button>
                <button className="w-1/2 px-6 m-4 duration-200 hover:scale-105">
                  <a href={code} alt="" target="_blank">
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
