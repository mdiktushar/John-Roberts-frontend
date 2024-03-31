import React from "react";

const Biography = ({ author }) => {
  console.log(author);
  return (
    <div className="flex flex-col md:flex-row items-center md:justify-between gap-10 md:gap-20 mt-[100px] lg:mt-[200px]">
      <div className="mt-10 md:mt-0">
        <img
          className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px]"
          src={author.image}
          alt={author.name}
        />
      </div>
      <div className="flex flex-col items-start gap-10 max-w-[700px]">
        <p className="mt-8 text-xs font-bold text-[#5f4ecb] tracking-[0.3em] text-center md:text-left">
          BIOGRAPHY
        </p>
        <h1 className="libre-baskerville-bold text-gray-800 text-3xl md:text-4xl lg:text-5xl leading-relaxed text-left">
          {author.name}
        </h1>
        <p className="max-w-[472px] text-left text-gray-500">
          {author.biography.slice(0, 317) + ` ...`}
        </p>

        <div className="flex flex-row justify-start ">
          <button className="btn border-solid border-[#5f4ecb] text-[#5f4ecb] hover:bg-[#5f4ecb] hover:text-white md:px-7 text-base">
            Rede Sample
          </button>
        </div>
      </div>
    </div>
  );
};

export default Biography;
