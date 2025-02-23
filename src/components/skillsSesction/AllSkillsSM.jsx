// import React from 'react'
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



const skills = [
    {
        skill: "Python",
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

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 my-12">
      {skills.map((item, index) => {
        return (
            <div key={index} className="flex flex-col items-center">
                <item.icon className="text-7xl text-yellow"/>
                <p className="text-center mt-4 text-white">{item.skill}</p>
            </div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;
