import React from "react";
import speach1 from "../../../../assets/img/author/speach1.png";

const FixedImage = () => {
  return (
    <div
      className="bg-fixed h-screen md:h-[400px] flex items-center"
      style={{
        backgroundImage: `url(${speach1})`,
        backgroundSize: "cover",
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`,
      }}
    >
      <div className="flex flex-col lg:flex-row justify-center items-center mx-5 md:mx-[100px] gap-20 md:gap-10">
        <div className="flex flex-col gap-5 text-white">
          <h3 className="text-5xl md:text-6xl TimeNewRoman font-bold">Speaking - Events</h3>
          <p className="text-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
            dicta eos quos nemo non modi esse commodi voluptate, magnam incidunt
            error officiis voluptates est.
          </p>
        </div>
        <div>
          <a className="btn btn-outline w-[200px] h-[80px] border-white text-white text-xl hover:bg-white hover:text-black" href="#contact_component">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default FixedImage;
