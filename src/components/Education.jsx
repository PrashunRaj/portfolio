import React from "react";
import { GraduationCap, BookOpen } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology",
      institution: "Birla Institute of Technology, Mesra",
      major: "Computer Science and Engineering",
      duration: "2023 - Present",
      icon: <GraduationCap className="w-12 h-12 text-[#64ffda]" />,
    },
    {
      degree: "Higher Secondary Education",
      institution: "DAV Co-Op Sr. Sec. School, Khalari",
      major: "Science Stream (PCM)",
      duration: "2021 - 2023",
      icon: <BookOpen className="w-12 h-12 text-[#64ffda]" />,
    },
  ];

  return (
    <div
  id="education"
  className="min-h-screen w-full max-w-none bg-transparent flex items-center relative 
           px-12 py-16 lg:flex-row max-md:flex-col 
           max-md:px-4 max-md:justify-center 
           md:pl-64 sm:pl-64 p-4 sm:p-6 
           bg-transparent text-white z-10"



>
  <div
    className="container mx-auto flex lg:flex-row max-md:flex-col 
                items-start justify-between gap-12 max-w-6xl"
  >
    {/* Left Side - Text Section */}
    <div className="lg:w-1/2 w-full">
      <div className="space-y-4">
        <span className="block text-4xl font-bold text-[#64ffda]">
          My Academic Journey
        </span>
        <h2 className="text-3xl font-bold text-[#ccd6f6] mb-6">
          Education Highlights
        </h2>
        <p className="text-[#8892b0] leading-relaxed">
          I am currently pursuing my Bachelor of Technology in Computer Science and Engineering at 
          Birla Institute of Technology, Mesra. My academic journey has been a continuous process of 
          learning, exploring, and gaining expertise in various aspects of technology and problem-solving.
          I completed my schooling at DAV Co-Op Sr. Sec. School, Khalari, where I built a strong foundation 
          in Science and Mathematics.
        </p>
      </div>
    </div>

    {/* Right Side - Education Timeline */}
    <div className="lg:w-1/2 w-full">
      <div className="space-y-6">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="bg-[#112240] p-6 rounded-lg border-l-4 border-[#64ffda] 
                       transition-all duration-300 hover:shadow-lg hover:translate-x-2"
          >
            <div className="flex items-center mb-4">
              {edu.icon}
              <div className="ml-4">
                <h3 className="text-xl font-bold text-[#ccd6f6]">{edu.degree}</h3>
                <p className="text-[#64ffda] text-sm">{edu.duration}</p>
              </div>
            </div>
            <div>
              <p className="text-[#8892b0]">{edu.institution}</p>
              <p className="text-[#8892b0] italic">{edu.major}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

  );
};

export default Education;
