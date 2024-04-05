import React from "react";

const Subscribe = () => {
  return (
    <div className="flex flex-col items-center gap-6 bg-white py-[100px] w-full">
      <h2 className="text-center TimeNewRoman font-bold text-5xl text-gray-900">Be the first to kenw</h2>
      <p className="text-center text-sm max-w-[460px] text-gray-500">
        Lectus amet scelerisque fusce est venenatis, eget enim dolor amet vitae
        pharetra.
      </p>
      <div className="flex flex-row gap-3 justify-center">
        <input
          type="email"
          placeholder="Your email please"
          class="input input-bordered input-md w-xs md:w-[300px] lg:w-[400px]"
        />

        <button class="btn btn-outline border-[#5f4ecb] text-[#5f4ecb] hover:text-white hover:bg-[#5f4ecb] px-6">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
