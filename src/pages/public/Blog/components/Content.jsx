import React, { useState } from "react";

const Content = ({ blog }) => {
  const [isOpen, setIsOpen] = useState(false); // State to manage modal visibility
  const [selectedBlog, setSelectedBlog] = useState({}); // State to manage currently selected blog

  // Function to open the modal and set the selected blog
  const openModal = (selectedBlog) => {
    setSelectedBlog(selectedBlog);
    setIsOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsOpen(false);
  };

  // Function to truncate text to a certain number of words
  const truncateText = (text, maxLength = 50) => {
    const words = text.split(` `);
    if (words.length > maxLength) {
      return words.slice(0, maxLength).join(` `) + ` [...]`;
    } else {
      return text;
    }
  };

  return (
    <>
      <div className="bg-white p-20 mx-2">
        <div className="flex flex-col justify-center gap-5">
          <img className="" src={blog.image} alt="" />
          <h3 className="TimeNewRoman text-2xl text-gray-600">{blog.title}</h3>
          <p className="text-gray-600 text-sm">{truncateText(blog.body, 50)}</p>
        </div>
        <button
          onClick={() => openModal(blog)}
          className="mt-5 text-sm text-gray-600 hover:text-[#5f4ecb]"
        >
          Read More...
        </button>
      </div>
      {/* Modal */}
      {isOpen && (
        <dialog className="modal" open>
          <div className="modal-box bg-white w-11/12 max-w-5xl">
            <h3 className="font-bold text-lg">{selectedBlog.title}</h3>
            <p className="py-4">{selectedBlog.body}</p>
            <div className="modal-action">
              {/* Button to close the modal */}
              <button onClick={closeModal} className="btn">
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
};

export default Content;
