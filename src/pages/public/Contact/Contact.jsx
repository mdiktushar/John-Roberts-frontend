import React from "react";
import TitleBanner from "../shared/TitleBanner/TitleBanner";

const Contact = () => {
  const [banner, setBanner] = useState({
    title: `Contact`,
    description: `Porttitor in nibh id aliquet quam aliquam aliquet pulvinar integer dolor quis elementum, dui cursus nisi, nunc viverra nulla fringilla.`,
  });
  return (
    <div>
      {/** Passing the data to banner component  */}
      <TitleBanner banner={banner} />


      {/* Subscribe Component */}
      <Subscribe />
    </div>
  );
};

export default Contact;
