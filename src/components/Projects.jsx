import React from "react";

import EarthWise from "../assets/EarthWise2.png";
import Port from "../assets/Port2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Portfolio = () => {
  return (
    <div
      id="portfolio"
      className="sm:ml-64 p-4 sm:p-6 bg-transparent text-white relative z-10"
    >
      {/* Adjusted padding for mobile */}
      <div className="container">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#64ffda]">
          My Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Work 2 */}
          <div className="relative overflow-hidden rounded-lg group">
            <img
              src={Port}
              alt="Portfolio Website"
              className="w-full rounded-lg transform transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-b from-[#0a192f]/60 to-[#64ffda] text-white text-center p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <h3 className="text-lg md:text-xl font-medium mb-4">
                My Portfolio Website
              </h3>
              <p className="text-sm md:text-base">
                A personal portfolio showcasing my skills, projects, and achievements in Full Stack Development and DSA.
              </p>
              <a
                href="#"
                className="mt-4 text-[#0a192f] text-base md:text-lg bg-[#64ffda] w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full"
              >
                <FontAwesomeIcon icon={faUpRightFromSquare}/>
              </a>
            </div>
          </div>

         {/* Work 2*/}
<div className="relative overflow-hidden rounded-lg group">
  <a href="https://sustainable-frontend.onrender.com/" target="_blank" rel="noopener noreferrer">
    <img
      src={EarthWise}
      alt="Sustainability Platform"
      className="w-full rounded-lg transform transition-transform duration-500 group-hover:scale-110 cursor-pointer"
    />
  </a>
  <div className="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-b from-[#0a192f]/60 to-[#64ffda] text-white text-center p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
    <h3 className="text-lg md:text-xl font-medium mb-4">
      EcoConnect Platform
    </h3>
    <p className="text-sm md:text-base">
      A platform that connects individuals with eco-friendly service providers and promotes sustainable living.
    </p>
    <a
      href="https://sustainable-frontend.onrender.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 text-[#0a192f] text-base md:text-lg bg-[#64ffda] w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full"
    >
      <FontAwesomeIcon icon={faUpRightFromSquare} />
    </a>
  </div>
</div>




        </div>
        <a
          href="#"
          className="block mt-10 mx-auto text-center text-[#64ffda] border border-[#64ffda] py-3 px-8 rounded-md hover:bg-[#64ffda] hover:text-[#0a192f] transition-colors duration-500"
        >
          See More
        </a>
      </div>
    </div>
  );
};

export default Portfolio;

