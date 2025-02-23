// import React from 'react';
import { FaPython } from "react-icons/fa";
// import { BiLogoFlask } from "react-icons/bi";
// import { BiLogoDjango } from "react-icons/bi";
import { DiJavascript } from "react-icons/di";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiTypescript } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
// import { FaLaravel } from "react-icons/fa";
// import { FaLinux } from "react-icons/fa";
// import { SiMikrotik } from "react-icons/si";
// import { DiMongodb } from "react-icons/di";
// import { SiMysql } from "react-icons/si";
// import { SiAdobeillustrator } from "react-icons/si";
// import { FaFigma } from "react-icons/fa";
import SingleSkill from "./SingleSkill";


const skills = [
    {
        skill: "PYTHON",
        icon: FaPython,
    },
    // {
    //     skill: "Flask",
    //     icon: BiLogoFlask,
    // },
    // {
    //     skill: "Django",
    //     icon: BiLogoDjango,
    // },
    {
        skill: "Javascript",
        icon: DiJavascript,
    },
    {
        skill: "Tailwind",
        icon: BiLogoTailwindCss,
    },
    {
        skill: "TypeScript",
        icon: SiTypescript,
    },
    {
        skill: "Bootstrap",
        icon: FaBootstrap,
    },
    {
        skill: "ReactJS",
        icon: FaReact,
    },
    {
        skill: "Redux",
        icon: SiRedux,
    },
    {
        skill: "PHP native",
        icon: FaPhp,
    },
    // {
    //     skill: "Laravel",
    //     icon: FaLaravel,
    // },
    // {
    //     skill: "Ubuntu",
    //     icon: FaLinux,
    // },
    // {
    //     skill: "Mikrotik",
    //     icon: SiMikrotik,
    // },
    // {
    //     skill: "MongoDb",
    //     icon: DiMongodb,
    // },
    // {
    //     skill: "Mysql",
    //     icon: SiMysql,
    // },
    // {
    //     skill: "AI",
    //     icon: SiAdobeillustrator,
    // },
    // {
    //     skill: "Figma",
    //     icon: FaFigma,
    // }
];

const AllSkills = () => {
  return (
    <div >
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) =>{
            return (
                <SingleSkill key={index} text ={item.text} imgSvg={<item.icon/>}/> 
            );
      })}
      </div>
    </div>
  );
};

export default AllSkills;
