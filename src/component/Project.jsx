import React, { useState } from "react";
import BillboardImg from "../assets/Billboard.jpg";
import flyerImg from "../assets/flyer.jpg";
import kalender1Img from "../assets/kalender1.jpg";
import frontEndImg from "../assets/Frontend Design.jpg";
import karikatureImg from "../assets/karikature.jpg";
import Modelling3DImg from "../assets/3D modelling.jpg";
import ModdelingBusStop from "../assets/Bus Stop.jpg";
import NameTagDesign from "../assets/Name Tag Design.jpg";
import BillboardImg2 from "../assets/go green ok.jpg";
import ToysPhotography from "../assets/toys.jpg";
import MerchDesign1 from "../assets/top 10 client ALT2.jpg";
import MerchDesign2 from "../assets/top 10 client ALT4.jpg";
import MerchDesign3 from "../assets/top 10 client.jpg";
import BillboardImg3 from "../assets/go green 2.jpg";
import PriceTagDesign2 from "../assets/price tag II.jpg";
import PriceTagDesign3 from "../assets/price tag III.jpg";
import ClothDesign from "../assets/Cloth Design.jpg";
import OnewayVisionDesign from "../assets/OnewayVision.jpg";
import {
  AiOutlineClose,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { SiCampaignmonitor } from "react-icons/si";

const galleryImages = [
  {
    id: "1",
    tools: "Adobe Photoshop",
    title: "Large Format Printing",
    img: BillboardImg,
  },
  {
    id: "2",
    tools: "3D studio max, rendered by V-RAY",
    title: "3D modelling",
    img: flyerImg,
  },
  {
    id: "3",
    tools: "3D studio max, rendered by V-ray",
    title: "Concept Calendar Design",
    img: kalender1Img,
  },
  {
    id: "4",
    tools: "HTML5, Css3,Java script",
    title: "Front End Web design",
    img: frontEndImg,
  },
  {
    id: "5",
    tools: "PSD",
    title: "Artwork Karikature",
    img: karikatureImg,
  },
  {
    id: "6",
    tools: "3D Studio max renderred by MENTAL-RAY",
    title: "3D Modelling",
    img: ModdelingBusStop,
  },
  {
    id: "7",
    tools: "Corel Draw",
    title: "Name tag design",
    img: NameTagDesign,
  },
  {
    id: "8",
    tools: "PSD",
    title: "Large Format Printing",
    img: BillboardImg2,
  },
  {
    id: "9",
    tools: "Pixelate (android app)",
    title: "Toys Photography",
    img: ToysPhotography,
  },
  {
    id: "10",
    tools: "PSD",
    title: "Merch design",
    img: MerchDesign1,
  },
  {
    id: "11",
    tools: "PSD",
    title: "Merch Design",
    img: MerchDesign2,
  },
  {
    id: "12",
    tools: "PSD",
    title: "Merch Design",
    img: MerchDesign3,
  },
  {
    id: "13",
    tools: "PSD",
    title: "Large Format Printing",
    img: BillboardImg3,
  },
  {
    id: "14",
    tools: "Corel Draw",
    title: "Price Tag Design",
    img: PriceTagDesign2,
  },
  {
    id: "15",
    tools: "Corel Draw",
    title: "Price Tag Design",
    img: PriceTagDesign3,
  },
  {
    id: "16",
    tools: "PSD",
    title: "Cloth design",
    img: ClothDesign,
  },
  {
    id: "17",
    tools: "Blender Rendered by Yafray",
    title: "3D Modelling",
    img: Modelling3DImg,
  },
  {
    id: "18",
    tools: "PSD,Blender Rendered by Yafray",
    title: "One way vision Design Visualitation",
    img: OnewayVisionDesign,
  },
];
const Project = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleNextSlide = () => {
    slideNumber + 1 === galleryImages.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  const handlePrevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(galleryImages.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  return (
    <div>
      {openModal && (
        <div className="sliderWrap fixed top-0 left-0 w-[100%] h-[100%] z-50 bg-emerald-500/30 backdrop-blur-sm ">
          <button
            className="btnLeft text-white absolute inset-y-[50%] left-5"
            onClick={handlePrevSlide}
          >
            <AiOutlineArrowLeft className=" p-1 rounded-full bg-slate-700 text-2xl" />
          </button>
          <button
            className="btnRight text-white absolute inset-y-[50%] right-5"
            onClick={handleNextSlide}
          >
            <AiOutlineArrowRight className=" p-1 rounded-full bg-slate-700 text-2xl" />
          </button>

          <div className="fullScreenImage w-[100%] h-[100%] mx-auto justify-center flex overflow-y-hidden ">
            <img
              src={galleryImages[slideNumber].img}
              alt=""
              className="max-w-[90%] max-h-[100%] object-contain overflow-y-hidden"
            />
            <button
              className="btnClose text-white rounded-full "
              onClick={handleCloseModal}
            >
              <AiOutlineClose className="bg-slate-700 p-1 rounded-full text-2xl absolute top-0 " />
            </button>
          </div>
        </div>
      )}
      <div
        className=" relative bg-gradient-to-t from-rose-800/70 via-rose-700/60 to-emerald-800/50 backdrop-blur-sm mt-10 p-5 "
        id="project"
      >
        <h1 className="md:text-4xl text-2xl mx-auto flex w-fit mb-5 font-bold text-white px-2 py-1 rounded-lg">
          PORTFOLIO
        </h1>
        <hr className="md:m-5 m-4" />
        <div className="galleryWrap grid md:grid-cols-4 grid-cols-2 justify-center align-middle md:max-w-[1024px] max-w-[95%] mx-auto gap-2 px-2">
          {galleryImages &&
            galleryImages.map((slide, index) => {
              return (
                <div
                  className="single cursor-pointer relative flex items-center justify-center group hover:scale-110 z-10 "
                  key={slide.id}
                >
                  <img
                    src={slide.img}
                    alt=""
                    className="aspect-[4/3] object-cover object-top"
                  />
                  <div className="hidden group-hover:block group-hover:bg-gradient-to-t from-rose-600 to-emerald-700/25 w-full h-full absolute items-center md:mx-1 mx-1 py-[15%] ">
                    <h1 className=" md:text-xl text-xs font-bold tracking-tight text-white text-center">
                      {slide.title}
                    </h1>
                    <p className="md:pb-2 py-0.5 text-xs text-center lg:block hidden text-white">
                      Tools : {slide.tools}
                    </p>

                    <p
                      className="text-center md:px-2 p-2 rounded-lg bg-slate-400 hover:bg-rose-700 text-white cursor-pointer md:text-lg text-sm w-fit mx-auto my-2"
                      key={slide.id}
                      onClick={() => handleOpenModal(index)}
                    >
                      <SiCampaignmonitor />
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
        <hr className="md:m-5 m-4" />
      </div>
    </div>
  );
};

export default Project;
