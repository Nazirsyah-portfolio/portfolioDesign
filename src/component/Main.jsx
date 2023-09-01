import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaWhatsapp, FaGoogle } from "react-icons/fa";

const Main = () => {
  return (
    <div className=" h-[100vh]" id="main">
      <div className="absolute right-5 text-xs bg-emerald-900 rounded-lg px-2 text-white z-50 opacity-50">
        Photo by
        <a href="https://unsplash.com/@dankapeter?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Danka & Peter
        </a>
        on
        <a href="https://unsplash.com/photos/L0o1RfQuPUY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Unsplash
        </a>
      </div>
      <div className="absolute w-[100%] h-[110vh] left-0 top-0 skew-y-[45deg] bg-gradient-to-b from-rose-600/20 to-emerald-700/20 z-10 " />
      <div className="w-[50%] h-[50vh] skew-y-[45deg] bg-rose-600/20 absolute top-44 " />
      <div className="w-[50%] h-[50vh] skew-y-[45deg] bg-emerald-700/20 absolute top-44 right-0 " />
      <div className=" absolute w-full h-screen bg-gradient-to-t from-emerald-500 to-sky-500 via-rose-600 mix-blend-multiply"></div>
      <img
        className="w-full h-screen object-cover object-bottom mix-blend-multiply fixed"
        src="./src/imgs/danka-peter-L0o1RfQuPUY-unsplash.jpg"
        alt=""
      />

      <div className=" text-white/60 font-bold text-xl w-fit h-fit text-center inset-x-[15%] top-[80vh] mx-auto md:hidden block z-20 absolute">
        <h1>
          Scroll <br />
          for more information{" "}
        </h1>
      </div>

      <div className="absolute inset-y-[16%] w-fit h-fit inset-x-[5%]  z-20 font-extralight md:-rotate-45 top-15 text-emerald-300 md:p-7 p-5 mx-auto md:text-7xl text-3xl md:text-left text-center transition-all duration-1000">
        <h1 className=" font-thin text-white md:text-7xl text-4xl md:tracking-widest">
          NAZIRSYAH
        </h1>
        <h1 className=" font-extrabold text-transparent bg-gradient-to-t from-emerald-300 to-purple-700 bg-clip-text ">
          PORTFOLIO
        </h1>
        <h1 className="font-thin text-yellow-400 md:text-9xl text-5xl text-center relative">
          <div className="absolute md:w-3 w-2 md:h-3 h-2 top-[50%] bg-yellow-500 rounded-full" />
          2 0 2 3
          <div className="absolute md:w-3 w-2 md:h-3 h-2 top-[50%] bg-yellow-500 right-0 rounded-full" />
        </h1>

        <TypeAnimation
          style={{
            textAlign: "center",
            whiteSpace: "pre-line",
            height: "150px",
            display: "block",
            fontSize: "0.7em",
          }}
          preRenderFirstString={true}
          sequence={[
            "",
            500,
            ".Graphic Design.", // initially rendered starting point
            1000,
            ".Large Format.\n.Printing.",
            1000,
            ".Front End.\n.Web Design.",
            1000,
            ".3D Modelling.",
            500,
          ]}
          omitDeletionAnimation={true}
          repeat={Infinity}
        />
      </div>

      <div className="  md:left-0 right-0 md:top-10 top-[50vh] md:rounded-r-xl rounded-l-md bg-slate-500 md:p-3 p-1 w-fit text-white z-50 fixed md:text-xl text-lg">
        <a href="https://wa.me/6285774561015">
          <FaWhatsapp className="cursor-pointer z-10 mb-2 active:scale-110 active:text-rose-800" />
        </a>
        <a href="mailto:nazirsyah18@gmail.com">
          <FaGoogle className="cursor-pointer z-10 active:scale-110 active:text-rose-800" />
        </a>
      </div>
    </div>
  );
};

export default Main;
