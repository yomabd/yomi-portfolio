import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="bg-gradient-to-b from-black via-black to-gray-800 w-full min-h-screen text-white"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-lg mt-20">
          Abdullah Oriyomi Idris(Yomabd) received his second-class
          upper-division degree from Unilorin. He is a software Engineer and a
          Google-certified IT support specialist. I have experience working with
          a team in designing, developing and hosting functional web
          applications.
        </p>
        <br />
        <p className="text-lg">
          He creates websites that are both visually stunning and tailored to
          your preferences. He is capable of increasing efficiency and
          productivity by automating the majority of tedious computing
          operations.
        </p>
      </div>
    </div>
  );
};

export default About;
