import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone } from 'lucide-react';

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const sendEmail = (e) =>{
    e.preventDefault();
    
    emailjs
      .sendForm(
        "service_dwldl1i",
        "template_klhu4y9",
        form.current,
        "nqgTje9l17BnICg58"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div 
    id="contact" 
    className="px-12 flex min-h-screen bg-transparent 
            items-center justify-center text-white 
            max-md:flex-col max-md:px-4 max-md:py-12 
            lg:pl-[300px] sm:ml-64 p-4 sm:p-6 
            relative z-10"
// Adjusted for sidebar
  >
    <div className="container mx-auto flex 
                    max-md:flex-col 
                    items-center justify-between 
                    gap-8 max-w-6xl" // Reduced gap between sections
    >
      {/* Left Side */}
      <div className="w-full lg:w-1/2 max-md:w-full">
        <div className="relative">
          <span className="block text-4xl font-bold text-[#64ffda]">
            Get in Touch
          </span>
          <span className="block text-3xl font-bold text-[#ccd6f6] mb-6">
            Contact me
          </span>
          
          <div className="space-y-4">
            <p className="flex items-center text-[#64ffda] text-base group">
              <Mail 
                className="mr-3 text-[#64ffda] group-hover:scale-110 
                           transition-transform duration-300"
                size={22} 
              />
              <span className="text-[#ccd6f6]">rajprashun64@gmail.com</span>
            </p>
            <p className="flex items-center text-[#64ffda] text-base group">
              <Phone 
                className="mr-3 text-[#64ffda] group-hover:scale-110 
                           transition-transform duration-300"
                size={22} 
              />
              <span className="text-[#ccd6f6]">8434013295</span>
            </p>
          </div>
        </div>
      </div>
  
      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 max-md:w-full flex justify-center">
        <form 
          ref={form} 
          onSubmit={sendEmail} 
          className="flex flex-col gap-6 w-full max-w-md bg-transparent"
        >
          <input 
            type="text" 
            name="user_name" 
            placeholder="Name"
            className="w-full p-3 bg-[#112240] text-[#ccd6f6] 
                       border-2 border-[#64ffda] border-opacity-50 
                       rounded-lg outline-none 
                       focus:border-[#64ffda] focus:border-opacity-100 
                       transition-all duration-300"
          />
          <input 
            type="email" 
            name="user_email" 
            placeholder="Email"
            className="w-full p-3 bg-[#112240] text-[#ccd6f6] 
                       border-2 border-[#64ffda] border-opacity-50 
                       rounded-lg outline-none 
                       focus:border-[#64ffda] focus:border-opacity-100 
                       transition-all duration-300"
          />
          <textarea 
            name="message" 
            placeholder="Message"
            className="w-full p-3 h-36 bg-[#112240] text-[#ccd6f6] 
                       border-2 border-[#64ffda] border-opacity-50 
                       rounded-lg outline-none resize-none
                       focus:border-[#64ffda] focus:border-opacity-100 
                       transition-all duration-300"
          />
          <button 
            type="submit" 
            className="bg-transparent border-2 border-[#64ffda] 
                       text-[#64ffda] px-6 py-3 rounded-lg 
                       hover:bg-[#64ffda] hover:bg-opacity-10  hover:text-[#0a192f] transition-colors duration-500
                       transition-all duration-300 
                       flex items-center justify-center"
          >
            Send Message
          </button>
          
          {done && (
            <span className="text-[#64ffda] text-center">
              Thanks for Contacting me
            </span>
          )}
        </form>
      </div>
    </div>
  </div>

  
  );
};

export default Contact;