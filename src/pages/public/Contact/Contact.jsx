import React, { useState } from "react";
import TitleBanner from "../shared/TitleBanner/TitleBanner";
import Subscribe from "../shared/Subscribe/Subscribe";
import FixedImage from "./components/FixedImage";
import ContactComponent from "./components/ContactComponent/ContactComponent";

const Contact = () => {
  const [banner, setBanner] = useState({
    title: `Contact`,
    description: `Porttitor in nibh id aliquet quam aliquam aliquet pulvinar integer dolor quis elementum, dui cursus nisi, nunc viverra nulla fringilla.`,
  });
  return (
    <div id="contact_component">
      {/** Passing the data to banner component  */}
      <TitleBanner banner={banner} />
      {/* Contact Component Contains contact form and others */}
      <ContactComponent />
      {/* Fixed Image  */}
      <FixedImage />
      {/* Subscribe Component */}
      <Subscribe />
    </div>
  );
};

export default Contact;
