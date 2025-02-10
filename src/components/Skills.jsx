import React from "react";
import {
  Code,
  Database,
  Server,
  Laptop,
  Rocket,
  Layers,
} from "lucide-react";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiCplusplus,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { FaJava } from "react-icons/fa"; // Importing Java icon from FontAwesome

const SkillSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      description: "Proficient in multiple programming languages",
      icon: <Code className="w-12 h-12 text-[#64ffda]" />,
      technologies: [
        { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
        { name: "C++", Icon: SiCplusplus, color: "#00599C" },
        { name: "Java", Icon: FaJava, color: "#007396" }, // Fixed Java icon
      ],
    },
    {
      title: "Frontend Technologies",
      description: "Creating responsive and interactive web interfaces",
      icon: <Laptop className="w-12 h-12 text-[#64ffda]" />,
      technologies: [
        { name: "React", Icon: SiReact, color: "#61DAFB" },
        { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38B2AC" },
      ],
    },
    {
      title: "Backend & Database",
      description: "Building scalable server-side applications",
      icon: <Server className="w-12 h-12 text-[#64ffda]" />,
      technologies: [
        { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
        { name: "Express.js", Icon: SiExpress, color: "#000000" },
        { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
      ],
    },
    {
      title: "Version Control ",
      description: "Managing code and collaborative development",
      icon: <Layers className="w-12 h-12 text-[#64ffda]" />,
      technologies: [
        { name: "Git", Icon: SiGit, color: "#F05032" },
        { name: "GitHub", Icon: SiGithub, color: "#181717" },
      ],
    },
   
  ];

  return (
    <div
      id="skills"
      className="min-h-screen w-full max-w-none text-white flex flex-col items-center 
      lg:items-start px-6 py-16 md:pl-64 sm:pl-64 
      p-4 sm:p-6 bg-transparent relative z-10"

    >
      {/* Main Content */}
      <div className="w-full">
        {/* Introduction */}
        <div className="text-center mb-12">
          <span className="text-2xl font-bold text-[#64ffda]">
            My Skill Set
          </span>
          <h2 className="text-4xl font-bold text-[#ccd6f6] mt-4">
            Full Stack Web Development & DSA
          </h2>
          <p className="text-[#8892b0] leading-relaxed mt-4">
          As a Full Stack Developer with strong problem-solving skills in Data Structures and Algorithms (DSA), I bring comprehensive expertise in both frontend and backend technologies. My skills span multiple programming languages and frameworks, enabling me to create robust, scalable, and efficient software solutions.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-[#112240]/80 p-6 rounded-lg border-l-4 border-[#64ffda] transition-all duration-300 hover:shadow-lg hover:translate-y-1 backdrop-blur-md"
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-[#ccd6f6]">
                    {category.title}
                  </h3>
                  <p className="text-[#64ffda] text-sm">{category.description}</p>
                </div>
              </div>

              {/* Technology Icons */}
              <div className="flex flex-wrap gap-4 mt-4">
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="group relative flex flex-col items-center"
                  >
                    <tech.Icon
                      className="w-8 h-8 text-[#8892b0] group-hover:text-[#64ffda] transition-colors duration-300"
                      style={{ color: tech.color }}
                    />
                    <span className="text-xs text-[#8892b0] group-hover:text-[#64ffda] opacity-0 group-hover:opacity-100 transition-all duration-300 absolute -bottom-6">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillSection;



