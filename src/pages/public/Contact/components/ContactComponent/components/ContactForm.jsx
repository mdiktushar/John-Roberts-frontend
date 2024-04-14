import React from "react";

const ContactForm = () => {
  const handelSendMessage = (event) => {
    // Prevent the default behavior of form submission in React
    event.preventDefault();
    // Retrieve the value of the input field
    console.log(event.target.elements);
  };
  return (
    <div>
      <h1 className="text-6xl text-gray-900 TimeNewRoman">Send a Message</h1>
      <p className="text-gray-600 mt-[20px]">
        Ultrices dui maecenas quisque cras dui sed porttitor aliquam morbi
        libero egestas lacus sed.
      </p>

      <form onSubmit={handelSendMessage}>
        <div className="flex flex-col gap-5 my-5">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full name"
            className="input bg-white border-gray-200 input-bordered w-full"
          />
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email address"
            className="input bg-white border-gray-200 input-bordered w-full"
          />
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
            className="input bg-white border-gray-200 input-bordered w-full"
          />
          <textarea
            name="message"
            id="message"
            className="textarea textarea-bordered textarea-md bg-white border-gray-200 w-full"
            placeholder="Your message"
          ></textarea>
        </div>
        <button className="btn btn-outline border-[#5f4ecb] text-[#5f4ecb] hover:bg-[#5f4ecb] hover:text-white py-2 px-4">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
