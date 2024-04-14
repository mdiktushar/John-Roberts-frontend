import React from "react";
import { IoIosMail } from "react-icons/io";

const ContactEmail = () => {
  return (
    <div className="flex flex-row gap-4">
      <IoIosMail style={{ color: `#5f4ecb`, fontSize: "24px" }} />
      <div className="flex flex-col gap[1px]">
        <p className="tracking-[0.2em] font-semibold">MAIL ME</p>
        <p className="text-gray-600">mail@example.com</p>
        <p className="text-gray-600">info@example.com</p>
      </div>
    </div>
  );
};

export default ContactEmail;
