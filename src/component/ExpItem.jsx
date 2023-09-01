import React from "react";

const ExpItem = ({ year, title, duration, details }) => {
  return (
    <div>
      <ol className="flex flex-col md:flex-row relative border-l border-stone-200 mt-5">
        <li className="ml-4 mb-10">
          <div className="rounded-full w-2 h-2 bg-white -left-1 mt-2.5 absolute" />
          <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
            <span className="inline-block px-2 py-1 font-semibold text-white bg-emerald-700 rounded-md z-20">
              {year}
            </span>
            <span className="text-lg font-semibold text-white z-20">
              {title}
            </span>
            <span className="my-1 text-sm font-normal leading-none text-emerald-300 z-20">
              {duration}
            </span>
          </p>
          <p className="flex my-2 font-normal text-slate-200 z-10 bg-blend-overlay">
            <span className="z-10">{details}</span>
          </p>
        </li>
      </ol>
    </div>
  );
};

export default ExpItem;
