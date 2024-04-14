import React, { useState } from "react";
import TitleBanner from "../shared/TitleBanner/TitleBanner";
import Subscribe from "../shared/Subscribe/Subscribe";
import FixedImage from "./components/FixedImage";

const Contact = () => {
  const [banner, setBanner] = useState({
    title: `Contact`,
    description: `Porttitor in nibh id aliquet quam aliquam aliquet pulvinar integer dolor quis elementum, dui cursus nisi, nunc viverra nulla fringilla.`,
  });
  return (
    <div>
      {/** Passing the data to banner component  */}
      <TitleBanner banner={banner} />


      <FixedImage />

      {/* Subscribe Component */}
      <Subscribe />
    </div>
  );
};

export default Contact;
