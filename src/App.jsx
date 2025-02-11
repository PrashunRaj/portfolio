import React from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";

import  ParticlesBackground from "./components/Background";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/contact";
import Projects from "./components/Projects";
import Footer from "./components/footer";
import AchievementSection from "./components/Achievements";

const App = () => {
  return (
    <div className="relative w-full min-h-screen overflow-y-auto">
      {/* Background Component */}
      <div className="fixed inset-0 -z-10">
        < ParticlesBackground />
      </div>
      
      {/* Navbar Component */}
      <Navbar />
  
      {/* Main Content */}
      <div className="relative z-10">
   

        <Intro />
        <Education />
        <Skills />
        <Projects />
        <AchievementSection />
        <Contact />
        <Footer/>

      </div>
    </div>
  );
};

export default App;