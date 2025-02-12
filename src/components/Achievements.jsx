import React, { useState } from 'react';
import { Trophy, Star, Medal, Code, X } from 'lucide-react';

import  fifty from '../assets/50days_img.png';
import fifty_vid from '../assets/50days_vid.gif';

import  hundred from '../assets/100days_img.png';
import hundred_vid from '../assets/100days_vid.gif';

import two_hundred from '../assets/200days_img.png';
import two_hundred_vid from '../assets/200Days.gif';

import sept from '../assets/sep_img.png';
import sept_vid from '../assets/sep_vid.gif';

import oct from '../assets/oct_img.png';
import oct_vid from '../assets/oct_vid.gif';

import nov from '../assets/nov_img.png';
import nov_vid from '../assets/nov_vid.gif';
 
import dec from '../assets/dec_img.png';
import dec_vid from '../assets/dec_vid.gif';

import jan from '../assets/jan_img.png';
import jan_vid from '../assets/jan_vid.gif';


const AchievementSection = () => {
  const [showBadges, setShowBadges] = useState(false);
  const [selectedBadge, setSelectedBadge] = useState(null);
  const leetcodeBadges = [
    {
      name: "Fifty Days Badge",
      staticImg: fifty, 
      gifImg: fifty_vid,       
      description: "Completed 50 Days of LeetCode Challenge"
    },
    {
      name: "100 Days Badge",
      staticImg: hundred, 
      gifImg: hundred_vid,       
      description: "Completed 100 Days of LeetCode Challenge"
    },
    {
      name: "200 Days Badge",
      staticImg: two_hundred, 
      gifImg: two_hundred_vid,       
      description: "Completed 200 Days of LeetCode Challenge"
    },
    {

      name: "September Badge",
      staticImg: sept, 
      gifImg: sept_vid,       
      description: "Completed September LeetCode Challenge"
    },
    {
      name: "October Badge",
      staticImg: oct, 
      gifImg: oct_vid,       
      description: "Completed October LeetCode Challenge"
    },
    {
      name: "November Badge",
      staticImg: nov, 
      gifImg: nov_vid,       
      description: "Completed November LeetCode Challenge"
    },
    {
      name: "December Badge",
      staticImg: dec, 
      gifImg: dec_vid,       
      description: "Completed December LeetCode Challenge"
    },
    {
      name: "January Badge",
      staticImg: jan, 
      gifImg: jan_vid,       
      description: "Completed January LeetCode Challenge"
    }
    
  ];

 
  
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
    },
    {
      icon: <Code className="text-teal-400" />,
      title: "LeetCode Streak Master",
      description: "Maintained a 164-day ongoing streak on LeetCode, consistently solving daily challenges.",
      date: "Current",
      onClick: () => setShowBadges(true)
    } ,{
      icon: <Code className="text-teal-400" />,
      title: "LeetCode Streak Master",
      description: "Maintained a 164-day ongoing streak on LeetCode, consistently solving daily challenges.",
      date: "Current",
      action: (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setShowBadges(true);
          }}
          className="mt-2 px-4 py-1.5 text-sm bg-transparent border border-teal-400 
                     text-teal-400 rounded-md hover:bg-teal-400/10 
                     transition-all duration-300"
        >
          See Badges
        </button>
      )
    }
  ];

  const Modal = ({ isOpen, onClose, children, title }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 z-[9999] flex items-start justify-center p-4 bg-black/50 backdrop-blur-sm overflow-y-auto pt-16">
        <div className="bg-[#0a192f] border border-teal-400/20 rounded-lg w-full max-w-3xl mt-8 flex flex-col relative">
          <div className="sticky top-0 flex justify-between items-center p-4 border-b border-teal-400/20 bg-[#0a192f]">
            <h3 className="text-teal-400 text-lg font-semibold">{title}</h3>
            <button 
              onClick={onClose} 
              className="z-[10000] p-2 bg-[#1a365d] rounded-full text-white hover:text-teal-400 hover:bg-[#1a365d]/80 transition-colors"
              aria-label="Close modal"
            >
              <X size={24} strokeWidth={2.5} />
            </button>
          </div>
          <div className="p-4 overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
    );
  };

  const BadgeCard = ({ badge }) => (
    <div 
      className="relative cursor-pointer p-4 bg-[#1a365d]/80 rounded-lg border border-teal-400/20 hover:bg-[#1a365d]/60 transition-all duration-300"
      onClick={() => setSelectedBadge(badge)}
    >
      <div className="w-24 h-24 mx-auto">
        <img 
          src={badge.staticImg} 
          alt={badge.name} 
          className="w-full h-full object-contain"
        />
      </div>
      <p className="mt-2 text-center text-sm text-teal-400">{badge.name}</p>
    </div>
  );

  return (
    <div id='achievements' className="sm:ml-64 min-h-screen flex flex-col bg-transparent text-white relative z-10">
      <div className="p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-teal-400">Achievements</h2>
      </div>
      <div className="flex-1 overflow-y-auto px-4 sm:px-6 pb-4 sm:pb-6 scrollbar-thin scrollbar-thumb-teal-400 scrollbar-track-transparent">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      
{achievements.map((achievement, index) => (
  <div
    key={index}
    className="bg-[#112240]/80 backdrop-blur-sm border border-teal-400/20 
               rounded-lg p-4 sm:p-6 flex flex-col space-y-3 
               hover:bg-[#112240]/70 transition-all duration-300 ease-in-out"
  >
    <div className="flex items-center space-x-3 sm:space-x-4">
      <div className="text-2xl sm:text-4xl">
        {achievement.icon}
      </div>
      <div>
        <h3 className="font-semibold text-base sm:text-lg text-teal-400">
          {achievement.title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-300">
          {achievement.description}
        </p>
        <span className="text-xs text-gray-500">
          {achievement.date}
        </span>
      </div>
    </div>
    {achievement.action && (
      <div className="flex justify-end">
        {achievement.action}
      </div>
    )}
  </div>
))}
        </div>
      </div>

      <Modal 
        isOpen={showBadges} 
        onClose={() => setShowBadges(false)}
        title="LeetCode Badges"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {leetcodeBadges.map((badge, index) => (
            <BadgeCard key={index} badge={badge} />
          ))}
        </div>
      </Modal>

      <Modal 
        isOpen={!!selectedBadge} 
        onClose={() => setSelectedBadge(null)}
        title={selectedBadge?.name}
      >
        {selectedBadge && (
          <div className="flex flex-col items-center">
            <img 
              src={selectedBadge.gifImg}
              alt={selectedBadge.name} 
              className="w-48 h-48 object-contain"
            />
            <p className="mt-4 text-center text-gray-300">{selectedBadge.description}</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default AchievementSection;

