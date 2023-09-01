import React from "react";
import ExpItem from "./ExpItem";

const data = [
  {
    year: 2018,
    title: "PT.Rainbow Indah Carpet",
    duration: "5 Years",
    details:
      "Last Position Axminster Design, make carpet design by order from client make sample & concept design & color match by the company standard as customer requested ",
  },
  {
    year: 2013,
    title: "PT.Wrapindo Pratama",
    duration: "5 Years",
    details:
      "Last Position Graphic designer & cutting Operator ,make material promotional for company,make a design by order from client, applicated into the real layout, supervise the design installation",
  },
  {
    year: 2012,
    title: "PT.Warna Warni Media",
    duration: "1 Years",
    details:
      "Last Position Graphic designer & cutting Operator,make material promotional & maintenance report for company and client , support sales & marketing ",
  },
  {
    year: 2011,
    title: "CV.Citra Kreasindo",
    duration: "1 Years",
    details:
      "Last Position Graphic designer , digital Printing & cutting Operator staff responsible to maintenance the printing equipment & queue printing design, make promotional stuff by order from customer",
  },
  {
    year: 2010,
    title: "PT.Dycom Engginering",
    duration: "1 Years",
    details:
      "Last Position Graphic designer & General affair staff responsible to make promotional material for company and support sales & marketing Program",
  },
];
const Exp = () => {
  return (
    <div id="exp" className="mx-auto p-4 relative">
      <hr className="md:m-3 m-4" />
      <h1 className="md:text-4xl text-2xl font-bold text-center relative text-emerald-800 mt-4 z-10">
        Work Experience
      </h1>
      <hr className="md:m-5 m-4" />
      <div className="max-w-[1024px] mx-auto bg-emerald-800/75 backdrop-blur-sm p-5 ">
        {data.map((item, idx) => (
          <ExpItem
            key={idx}
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
          />
        ))}
      </div>
    </div>
  );
};

export default Exp;
