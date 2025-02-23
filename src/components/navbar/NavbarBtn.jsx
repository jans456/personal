// import React from 'react'
import { FaArrowTrendDown } from "react-icons/fa6";

const NavbarBtn = () => {
  return (
   <button className="px-4 py-3 rounded-full text-xl font-bold text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-cyan to-orange hover:border-orange hover:scale-110 transition-all duration-500 hover:shadow-cyanShadow" >
    Hire Me
     <div className="sm:hidden md:block">
      <FaArrowTrendDown />
     </div>
  </button>
  );
};

export default NavbarBtn
