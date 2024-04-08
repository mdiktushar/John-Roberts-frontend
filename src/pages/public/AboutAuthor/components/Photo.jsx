import React from "react";
import photo1 from "../../../../assets/img/author/about.jpg";
import { ImQuotesLeft } from "react-icons/im";

const Photo = ({ data }) => {
  const { name, image, quotes } = data;
  return (
    <div className="flex flex-col md:flex-row gap-8 justify-center items-center px-[30px]">
      <div className="flex flex-row items-center gap-5 md:gap-8 ">
        <img
          className="w-[100px] md:w-[150px]  h-[150px] md:h-[300px]"
          src={photo1}
          alt=""
        />
        <img className="w-[180px] md:w-[320px] " src={image} alt="" />
      </div>
      <div className="max-w-fit md:max-w-[190px] lg:max-w-[400px] flex flex-col gap-5">
        <ImQuotesLeft style={{ color: "#5f4ecb", fontSize: "24px" }} />
        <p className="max-w-[300px] text-xl text-gray-500 font-semibold">{quotes}</p>
        <p className="text-base text-gray-500 font-semibold tracking-[0.3em]">{name}</p>
      </div>
    </div>
  );
};

export default Photo;
