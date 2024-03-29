import React from "react";

const NewRealised = ({ book }) => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-10 max-w-[700px]">
        <p className="mt-8 text-xs font-bold text-[#5f4ecb] tracking-[0.3em]">
          NEW RELEASE
        </p>
        <h1 className="libre-baskerville-bold text-7xl leading-relaxed">
          {book.title}
        </h1>
        <p className="max-w-[472px]">
          {book.description.slice(0, 150) + ` ...`}
        </p>

        <div className="flex flex-row gap-5">
          <button class="btn bg-[#5f4ecb] text-white hover:bg-[#3a2f81] px-7 text-base">
            Bye Now
          </button>
          <button class="btn border-solid border-[#5f4ecb] text-[#5f4ecb] hover:bg-[#5f4ecb] hover:text-white px-7 text-base">
            Rede Sample
          </button>
        </div>
      </div>
      <div className="px-[30px]">
        <img className="w-[400px] h-[550px]" src={book.image} alt={book.title} />
      </div>
    </div>
  );
};

export default NewRealised;
