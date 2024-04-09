import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TitleBanner from "../shared/TitleBanner/TitleBanner";
import Subscribe from "../shared/Subscribe/Subscribe";
import Awards from "../shared/Awards/Awards";
import Photo from "./components/Photo";
import Intorduction from "./components/Intorduction";

const AboutAuthor = () => {
  // loading data
  const author = useLoaderData();

  const [banner, setBanner] = useState({
    title: `About Author`,
    description: `Porttitor in nibh id aliquet quam aliquam aliquet pulvinar integer dolor quis elementum, dui cursus nisi, nunc viverra nulla fringilla.`,
  });

  return (
    <div>
      <TitleBanner banner={banner} />
      <Photo data={author} />
      <Intorduction biography={author.biography} />
      <Awards />
      <Subscribe />
    </div>
  );
};

export default AboutAuthor;
