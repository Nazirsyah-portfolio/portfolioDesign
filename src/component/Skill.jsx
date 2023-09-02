import React from "react";
import splash from "/src/imgs/splash.png";
import {
  SiAdobephotoshop,
  SiGimp,
  SiCss3,
  SiAdobeaftereffects,
  SiAdobepremierepro,
  SiAdobeindesign,
  SiAdobeillustrator,
  SiJavascript,
  SiReact,
  SiPhp,
  SiBlender,
  SiHtml5,
  SiMysql,
  SiCinema4D,
  SiAutodesk,
} from "react-icons/si";

const Skill = () => {
  return (
    <div className=" relative mb-10 mt-9" id="tools">
      <div className=" grid md:grid-cols-2 grid-cols-1 justify-center items-center content-center align-middle gap-5 mx-auto text-slate-600 bg-white/75 backdrop-blur-sm mt-5 w-full md:max-w-[1024px] max-w-[95%] py-9 px-10 relative">
        <h1 className=" w-fit h-fit -rotate-6 md:absolute md:text-7xl text-6xl md:p-1  tracking-tight font-sans font-bold z-10 md:bottom-5 top-0 text-white bayangan ">
          Skills&
          <br /> Tools
        </h1>
        <div className="mb-5 md:leading-loose text-sm pt-5">
          <hr className="w-full border-slate-500" />
          <h1 className="text-2xl font-bold mb-1 relative z-10 text-slate-800">
            Personal Statement
          </h1>
          <hr className="w-full border-slate-500" />

          <p className="text-slate-800 py-2">
            <span className="text-xl font-serif">H</span>ello there, my name is
            Nazirsyah, and this is my personal portfolio website. I've been
            worked as a graphic designer for almost 10 years and as a printing
            operator for 1 year. I have mastered several design software and
            enjoy learning new things while working on projects. As a computer
            informatics graduate, I also have a passion for web programming and
            application development. I have some basic experience with Visual
            Basic, FoxPro, and I also enjoy web programming, If you would like
            to know more about me, please feel free to contact me.
          </p>
          <hr className="w-full border-slate-500" />
        </div>

        <div className="md:pl-9 md:border-l-[1px] ">
          <h2 className="md:text-2xl text-xl font-bold py-2 px-5 relative w-fit">
            <div className="rounded-full w-2 h-2 bg-slate-500 top-5 left-0 absolute" />
            Graphic Design
            <div className="rounded-full w-2 h-2 bg-slate-500 top-5 right-0 absolute" />
          </h2>
          <hr className="w-3/5" />
          <div className="flex gap-3 my-6 space-x-5">
            <SiAdobephotoshop className="text-4xl text-sky-800 bayangan" />
            <SiGimp className="text-4xl text-slate-600" />
            <SiAdobeillustrator className="text-4xl text-orange-700" />
            <SiAdobeindesign className="text-4xl text-rose-800" />
          </div>
          <h2 className="md:text-2xl text-xl font-bold py-2 px-5 relative w-fit">
            <div className="rounded-full w-2 h-2 bg-slate-500 top-5 left-0 absolute" />
            Front End Web Design
            <div className="rounded-full w-2 h-2 bg-slate-500 top-5 right-0 absolute" />
          </h2>
          <hr className="w-3/5" />
          <div className="flex gap-3 my-6 space-x-5">
            <SiHtml5 className="text-4xl text-orange-600" />
            <SiCss3 className="text-4xl text-sky-600" />
            <SiJavascript className="text-4xl text-yellow-600" />
            <SiReact className="text-4xl text-sky-500" />
            <SiMysql className="text-4xl text-blue-950" />
            <SiPhp className="text-4xl text-violet-700" />
          </div>
          <h2 className="md:text-2xl text-xl font-bold py-2 px-5 relative w-fit">
            <div className="rounded-full w-2 h-2 bg-slate-500 top-5 left-0 absolute" />
            Video editing
            <div className="rounded-full w-2 h-2 bg-slate-500 top-5 right-0 absolute" />
          </h2>
          <hr className="w-3/5" />
          <div className="flex gap-3 my-6 space-x-5">
            <SiAdobepremierepro className="text-4xl text-purple-900" />
            <SiAdobeaftereffects className="text-4xl text-violet-900" />
            <SiCinema4D className="text-4xl text-indigo-950" />
          </div>
          <h2 className="md:text-2xl text-xl font-bold py-2 px-5 relative w-fit">
            <div className="rounded-full w-2 h-2 bg-slate-500 top-5 left-0 absolute" />
            3D modelling
            <div className="rounded-full w-2 h-2 bg-slate-500 top-5 right-0 absolute" />
          </h2>
          <hr className="w-3/5" />
          <div className="flex gap-3 my-6 space-x-5">
            <SiBlender className="text-4xl text-orange-700" />
            <SiAutodesk className="text-4xl text-emerald-800" />
          </div>
        </div>
      </div>

      <div className=" absolute -top-24 md:left-0 -left-32 z-5 ">
        <img src={splash} className="w-[400px] h-[400px] blend " />
      </div>
    </div>
  );
};

export default Skill;
