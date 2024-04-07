import React from "react";

const TitleBanner = ({ banner }) => {
  return (
    <div className="max-w-[700px] min-h-[400px] flex flex-col justify-center mx-auto gap-10 px-10">
      <h1 className="text-8xl TimeNewRoman font-bold text-center text-gray-800">
        {banner.title}
      </h1>
      <p className="text-center  text-gray-500">{banner.description}</p>
    </div>
  );
};

export default TitleBanner;
