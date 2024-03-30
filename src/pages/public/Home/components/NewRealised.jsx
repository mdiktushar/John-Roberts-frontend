import React from "react";

const NewRealised = ({ book }) => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center md:justify-between gap-20 md:gap-0">
      <div className="flex flex-col items-center md:items-start gap-10 max-w-[700px]">
        <p className="mt-8 text-xs font-bold text-[#5f4ecb] tracking-[0.3em] text-center md:text-left">
          NEW RELEASE
        </p>
        <h1 className="libre-baskerville-bold text-gray-800 text-5xl md:text-6xl lg:text-7xl leading-relaxed text-center md:text-left">
          {book.title}
        </h1>
        <p className="max-w-[472px] text-center md:text-left text-gray-500">
          {book.description.slice(0, 150) + ` ...`}
        </p>

        <div className="flex flex-row justify-center md:justify-start gap-5">
          <button class="btn bg-[#5f4ecb] text-white hover:bg-[#3a2f81] md:first-line:px-7 text-base">
            Bye Now
          </button>
          <button class="btn border-solid border-[#5f4ecb] text-[#5f4ecb] hover:bg-[#5f4ecb] hover:text-white md:px-7 text-base">
            Rede Sample
          </button>
        </div>
      </div>
      <div className="px-[30px]">
        <img className="w-[250px] md:w-[350px] h-[350px] lg:w-[400px] lg:h-[550px]" src={book.image} alt={book.title} />
      </div>
    </div>
  );
};

export default NewRealised;
