import React from "react";

const Subscribe = () => {
  const handleSubscribe = (event) => {
    // Prevent the default behavior of form submission in React
    event.preventDefault();
    // Retrieve the value of the input field by name
    console.log(event.target.elements.email.value);
  };

  return (
    <div className="flex flex-col items-center gap-6 bg-white px-[30px] py-[100px] rounded">
      <h2 className="text-center TimeNewRoman font-bold text-5xl text-gray-900">
        Be the first to kenw
      </h2>
      <p className="text-center text-sm max-w-[460px] text-gray-500">
        Lectus amet scelerisque fusce est venenatis, eget enim dolor amet vitae
        pharetra.
      </p>
      <form
        onSubmit={handleSubscribe}
        className="flex flex-row gap-3 justify-center"
      >
        <input
          type="text"
          name="email"
          placeholder="Your email please"
          className="input input-bordered input-md w-xs md:w-[300px] lg:w-[400px]"
        />

        <button
          type="submit"
          className="btn btn-outline border-[#5f4ecb] text-[#5f4ecb] hover:text-white hover:bg-[#5f4ecb] px-6"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Subscribe;
