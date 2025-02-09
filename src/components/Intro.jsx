
import React from "react";
import photo from '../assets/photo.jpg';

const About = () => {
  return (
    <div
      id="about"
      className="relative p-5 md:p-10 bg-transparent text-white flex justify-center items-center min-h-screen"
    >
      {/* Container for content */}
      <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center gap-10 text-center md:text-left md:ml-72">
        {/* Picture Section */}
        <div className="relative group w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg border-4 border-[#64ffda]">
          <img
            src={photo} 
            alt="Profile"
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* About Text Section */}
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-[#64ffda] mb-6">
            About Me
          </h1>
          <p className="text-base md:text-lg leading-relaxed mb-4">
          Hello! I'm a passionate developer specializing in building intuitive and dynamic web applications. Along with Full Stack Development, I have a strong grasp of Data Structures and Algorithms (DSA), which enhances my problem-solving abilities and optimizes my approach to software development.


          </p>
          <p className="text-base md:text-lg leading-relaxed mb-4">
          Outside of coding, I enjoy watching fictional movies, traveling to new places, exploring new hobbies, and staying updated with the latest tech trends. I’m always eager to connect with like-minded individuals and collaborate on exciting projects.
          </p>
          <a
            href="#"
            className="inline-block mt-4 text-[#64ffda] border border-[#64ffda] py-2 px-6 rounded-md hover:bg-[#64ffda] hover:text-[#0a192f] transition-colors duration-500"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;


