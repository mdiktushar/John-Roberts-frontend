import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TitleBanner from "../shared/TitleBanner/TitleBanner";
import Subscribe from "../shared/Subscribe/Subscribe";
import Awards from "../shared/Awards/Awards";
import Photo from "./components/Photo";
import Intorduction from "./components/Intorduction";
import Count from "./components/Count";

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
      <Count number_of_books={author.number_of_books} awards={author.awards} copies_sold={author.copies_sold} />
      <hr className="mt-[50px] mx-[30px] border-solid border-gray-300 border-1"/>
      <Awards />
      <hr className="my-[50px] mx-[30px] border-solid border-gray-300 border-1"/>
      <Subscribe />
    </div>
  );
};

export default AboutAuthor;
