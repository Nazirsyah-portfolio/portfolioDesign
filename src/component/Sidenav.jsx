import React, { useState, useTransition } from "react";
import {
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineMenu,
  AiOutlineProject,
} from "react-icons/ai";

import { BsTools } from "react-icons/bs";
import { FiGrid } from "react-icons/fi";

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  TransitionEvent;
  return (
    <div className=" text-slate-200 ">
      <AiOutlineMenu
        onClick={handleNav}
        className="fixed top-4 left-4 z-50 md:hidden hover:text-white text-3xl bg-slate-400 hover:bg-slate-300 p-1 rounded-full"
      />
      {nav ? (
        <div className="  fixed w-screen h-screen flex flex-col space-y-5 justify-center items-center bg-slate-800/90 backdrop-blur-sm z-40 md:hidden">
          <a
            onClick={handleNav}
            href="#main"
            className="md:w-[30%] w-[50%] bg-slate-200 flex justify-center text-slate-500  rounded-full shadow-lg px-4 py-3 cursor-pointer hover:scale-110 hover:text-slate-800 duration-300 ease-in"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">main</span>
          </a>

          <a
            onClick={handleNav}
            href="#exp"
            className="md:w-[30%] w-[50%] bg-slate-200 flex justify-center text-slate-500  rounded-full shadow-lg px-4 py-3 cursor-pointer hover:scale-110 hover:text-slate-800 duration-300 ease-in"
          >
            <FiGrid size={20} />
            <span className="pl-4">Experience</span>
          </a>

          <a
            onClick={handleNav}
            href="#project"
            className="md:w-[30%] w-[50%] bg-slate-200 flex justify-center text-slate-500  rounded-full shadow-lg px-4 py-3 cursor-pointer hover:scale-110 hover:text-slate-800 duration-300 ease-in"
          >
            <AiOutlineProject size={20} />
            <span className="pl-4">Portfolio</span>
          </a>

          <a
            onClick={handleNav}
            href="#tools"
            className="md:w-[30%] w-[50%] bg-slate-200 flex justify-center text-slate-500  rounded-full shadow-lg px-4 py-3 cursor-pointer hover:scale-110 hover:text-slate-800 duration-300 ease-in"
          >
            <BsTools size={20} />
            <span className="pl-4">Skill & Tools</span>
          </a>

          <a
            onClick={handleNav}
            href="#contact"
            className="md:w-[30%] w-[50%] bg-slate-200 flex justify-center text-slate-500  rounded-full shadow-lg px-4 py-3 cursor-pointer hover:scale-110 hover:text-slate-800 duration-300 ease-in"
          >
            <AiOutlineMail size={20} />
            <span className="pl-4">Contact</span>
          </a>
        </div>
      ) : (
        ""
      )}
      <div className="md:block hidden fixed bottom-0 z-40 inset-x-[38%] ">
        <div className="flex justify-center relative mx-auto items-center bg-gradient-to-b from-slate-500/90 to-transparent w-fit lg:space-x-4 space-x-3 h-[20%] rounded-t-xl  ">
          <a
            href="#main"
            className="bg-gradient-to-br from-emerald-500 to-sky-500 via-emerald-900 lg:border-b-4 border-b-2 border-emerald-500 lg:rounded-full rounded-full lg:p-4 p-2 shadow-lg text-white shadow-emerald-400 -mt-4 mb-2 hover:scale-125 hover:text-emerald-200 active:text-rose-500 active:scale-100 duration-200"
          >
            <AiOutlineHome className="active:scale-110" />
          </a>
          <a
            href="#exp"
            className="bg-gradient-to-br from-emerald-500 to-sky-500 via-emerald-900 lg:border-b-4 border-b-2 border-emerald-500 lg:rounded-full rounded-full lg:p-4 p-2 shadow-lg text-white shadow-emerald-400 -mt-4 mb-2 hover:scale-125 hover:text-emerald-200 active:text-rose-500 active:scale-100 duration-200"
          >
            <FiGrid className="active:scale-110" />
          </a>
          <a
            href="#project"
            className="bg-gradient-to-br from-emerald-500 to-sky-500 via-emerald-900 lg:border-b-4 border-b-2 border-emerald-500 lg:rounded-full rounded-full lg:p-4 p-2 shadow-lg text-white shadow-emerald-400 -mt-4 mb-2 hover:scale-125 hover:text-emerald-200 active:text-rose-500 active:scale-100 duration-200"
          >
            <AiOutlineProject className="active:scale-110" />
          </a>
          <a
            href="#tools"
            className="bg-gradient-to-br from-emerald-500 to-sky-500 via-emerald-900 lg:border-b-4 border-b-2 border-emerald-500 lg:rounded-full rounded-full lg:p-4 p-2 shadow-lg text-white shadow-emerald-400 -mt-4 mb-2 hover:scale-125 hover:text-emerald-200 active:text-rose-500 active:scale-100 duration-200"
          >
            <BsTools className="active:scale-110" />
          </a>
          <a
            href="#contact"
            className="bg-gradient-to-br from-emerald-500 to-sky-500 via-emerald-900 lg:border-b-4 border-b-2 border-emerald-500 lg:rounded-full rounded-full lg:p-4 p-2 shadow-lg text-white shadow-emerald-400 -mt-4 mb-2 hover:scale-125 hover:text-emerald-200 active:text-rose-500 active:scale-100 duration-200"
          >
            <AiOutlineMail className="active:scale-110" />
          </a>
        </div>
        {/* flex end */}
      </div>
      {/* horizontal navbar end */}
    </div>
    // navbar end
  );
};

export default Sidenav;
