// import React from 'react'

import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-yellow font-semibold uppercase text-3xl font-special text-center">Since 2022</p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="26" text="Years" />
        <p className="font-semibold text-6xl text-lightyellow">=</p>
        <ExperienceInfo number="50+" text="Projects" /> 
      </div>
      <p className="text-center text-white">
        Dengan pengalaman saya dalam proyek kuliah, freelance, serta mengelola bisnis sendiri,  
  saya telah mengembangkan keahlian di bidang pengembangan web, analisis data, implementasi AI,  
  dan otomatisasi bisnis </p>
        <ExperienceInfo number="0 " text="Rupiah"/>
    </div>
  );
};

export default ExperienceTopLeft;
