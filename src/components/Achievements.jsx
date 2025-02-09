import React from 'react';
import { Trophy, Star, Medal } from 'lucide-react';

const AchievementSection = () => {
  const achievements = [
    {
      icon: <Trophy className="text-teal-400" />,
      title: "Hackathon Success",
      description: "Secured 3rd rank in 'Hatch From Scratch' (24-hour Hackathon in Institute Techfest).",
      date: "2024"
    },
    {
      icon: <Star className="text-teal-400" />,
      title: "Academic Excellence",
      description: "Ranked 1st in school in CBSE Board Class 12th with 97%.",
      date: "2023"
    },
    {
      icon: <Medal className="text-teal-400" />,
      title: "Leadership Experience",
      description: "Served as the Head Boy, developing strong leadership and organizational skills.",
      date: "2023"
    }
  ];

  return (
    <div id='achievements' className="sm:ml-64 p-4 sm:p-6 bg-transparent text-white relative z-10">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-teal-400">Achievements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {achievements.map((achievement, index) => (
          <div 
            key={index} 
            className="bg-[#112240]/80 backdrop-blur-sm border border-teal-400/20 rounded-lg p-4 sm:p-6 flex items-center space-x-3 sm:space-x-4 hover:bg-[#112240]/70 transition-all duration-300 ease-in-out"
          >
            <div className="text-2xl sm:text-4xl">
              {achievement.icon}
            </div>
            <div>
              <h3 className="font-semibold text-base sm:text-lg text-teal-400">{achievement.title}</h3>
              <p className="text-xs sm:text-sm text-gray-300">{achievement.description}</p>
              <span className="text-xs text-gray-500">{achievement.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementSection;
