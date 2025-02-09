import React from 'react';
import { Instagram, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      Icon: Instagram,
      href: "https://www.instagram.com/prashun_raj?igsh=MTN2ajNtcnh6cWtuYw==",
      color: "#E4405F"
    },
    {
      Icon: Twitter,
      href: "https://x.com/PrashunRaj2",
      color: "#1DA1F2"
    },
    {
      Icon: Linkedin,
      href: "https://www.linkedin.com/in/prashun-raj-24a36b330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      color: "#0077B5"
    },
    {
      Icon: Github,
      href: "https://github.com/PrashunRaj",
      color: "#64ffda"
    }
  ];

  return (
    <footer 
      className="bg-[#0a192f] py-12 
                 flex items-center justify-center 
                 border-t border-[#64ffda] border-opacity-20
                 ml-[250px] max-md:ml-0 
                 transition-all duration-300"
    >
      <div className="container mx-auto px-4 text-center max-w-6xl">
        <div className="flex justify-center space-x-8 mb-6">
          {socialLinks.map(({ Icon, href }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Icon 
                className="w-8 h-8 text-[#64ffda] 
                           transform transition-all duration-300 
                           group-hover:scale-125 group-hover:rotate-6
                           text-opacity-80 hover:text-opacity-100"
                strokeWidth={1.5}
              />
            </a>
          ))}
        </div>
        
        <div className="text-[#8892b0] text-sm mt-4">
          <p className="max-md:text-sm">
            © {new Date().getFullYear()} Raj Prashun. 
            All Rights Reserved.
          </p>
          <p className="mt-2 text-xs text-[#64ffda] opacity-70 max-md:text-xs">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;