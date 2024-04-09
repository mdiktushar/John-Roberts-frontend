import React from "react";

const Intorduction = ({biography}) => {
  return (
    <div className=" flex justify-center my-[100px] px-[30px]">
      <div className="flex flex-col gap-5 max-w-[700px]">
        <h1 className="text-5xl TimeNewRoman text-gray-800">
          Award Winning Author
        </h1>
        <p>{biography}</p>
      </div>
    </div>
  );
};

export default Intorduction;
