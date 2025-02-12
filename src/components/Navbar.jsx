import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Home, 
  User, 
  GraduationCap, 
  Trophy, 
  Briefcase, 
  Mail,
  Briefcase as BriefcaseIcon,
  ChevronLeft,
  ChevronRight
  
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const navItems = [
    { 
      name: 'Home', 
      href: '#home', 
      icon: <Home className="w-5 h-5" />,
      section: 'home'
    },
    { 
      name: 'About', 
      href: '#about', 
      icon: <User className="w-5 h-5" />,
      section: 'about'
    },
    { 
      name: 'Education', 
      href: '#education', 
      icon: <GraduationCap className="w-5 h-5" />,
      section: 'education'
    },
    { 
      name: 'Achievements', 
      href: '#achievements', 
      icon: <Trophy className="w-5 h-5" />,
      section: 'achievements'
    },
    { 
      name: 'Skills', 
      href: '#skills', 
      icon: <Briefcase className="w-5 h-5" />,
      section: 'skills'
    },
    { 
      name: 'Contact', 
      href: '#contact', 
      icon: <Mail className="w-5 h-5" />,
      section: 'contact'
    }
  ];

  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Top Navbar */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-primary-bg/80 backdrop-blur-md z-50 flex justify-between items-center p-4">
        <div className="block text-4xl font-bold text-[#64ffda] flex items-center">
          <BriefcaseIcon className="w-6 h-6 mr-2 text-[#64ffda]" />
          Portfolio
        </div>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="text-white"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full bg-primary-bg/95 backdrop-blur-md z-40 p-4">
          <nav>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => handleNavClick(item.section)}
                className={`flex items-center space-x-3 text-white py-3 border-b border-primary-accent/20 hover:bg-primary-accent/10 transition ${
                  activeSection === item.section 
                    ? 'border-l-4 border-primary-accent pl-2 bg-primary-accent/10' 
                    : ''
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </a>
            ))}
          </nav>
        </div>
      )}

      {/* Desktop Sidebar */}
      <nav className={`hidden md:block fixed left-0 top-0 h-full ${
        isSidebarCollapsed ? 'w-20' : 'w-64'
      } bg-primary-bg/80 backdrop-blur-md z-50 p-6 transition-all duration-300 ease-in-out`}>
        <div className={`text-primary-accent font-bold text-2xl mb-10 ${
          isSidebarCollapsed ? 'text-center px-0' : 'text-center'
        }`}>
          {!isSidebarCollapsed && (
            <span className='block text-4xl font-bold text-[#64ffda]'>Portfolio</span>
          )}
        </div>

        {/* Collapse Toggle Button */}
        <button
          onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          className="absolute -right-4 top-8 bg-[#64ffda] text-primary-bg p-1.5 rounded-full hover:bg-[#4ad3b3] transition-colors"
        >
          {isSidebarCollapsed ? 
            <ChevronRight size={16} /> : 
            <ChevronLeft size={16} />
          }
        </button>

        <div className="space-y-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => handleNavClick(item.section)}
              className={`flex items-center ${
                isSidebarCollapsed ? 'justify-center' : 'space-x-4'
              } text-white hover:text-primary-accent transition group relative py-2 px-3 rounded-md ${
                activeSection === item.section 
                  ? 'bg-primary-accent/10 text-primary-accent border border-primary-accent' 
                  : 'border border-transparent'
              }`}
              title={isSidebarCollapsed ? item.name : ''}
            >
              {item.icon}
              {!isSidebarCollapsed && (
                <span className="group-hover:translate-x-1 transition">{item.name}</span>
              )}
              {activeSection === item.section && (
                <span className="absolute left-0 bottom-0 w-1 h-full bg-primary-accent rounded-l-md" />
              )}
            </a>
          ))}
        </div>
      </nav>

      {/* Sidebar/Top Navbar Spacer */}
      <div className={`md:pl-${isSidebarCollapsed ? '20' : '64'} pt-16 md:pt-0 transition-all duration-300`}></div>
    </>
  );
};

export default Navbar;
