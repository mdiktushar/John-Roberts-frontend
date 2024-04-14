import React from "react";
import ContactEmail from "./components/ContactEmail";
import ContactForm from "./components/ContactForm";
import SocialMedia from "./components/SocialMedia";

const ContactComponent = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 justify-between px-[30px] mb-[100px]">
      <ContactEmail />
      <ContactForm />
      <SocialMedia />
    </div>
  );
};

export default ContactComponent;
