import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TitleBanner from "../shared/TitleBanner/TitleBanner";
import NewRealised from "../shared/NewRealised/NewRealised";
import Subscribe from "../shared/Subscribe/Subscribe";
import Book from "../shared/Book/Book";

const Books = () => {
  // Loading Books
  const books = useLoaderData();

  const [banner, setBanner] = useState({
    title: `Books`,
    description: `Porttitor in nibh id aliquet quam aliquam aliquet pulvinar integer dolor quis elementum, dui cursus nisi, nunc viverra nulla fringilla.`,
  });

  return (
    <>
      {/** Passing the data to banner component  */}
      <TitleBanner banner={banner} />

      {/** Passing the last book form the arrar object  */}
      <NewRealised book={books[books.length - 1]} />
      <div className="my-[100px]">
        <h3 className="text-center mb-[50px] TimeNewRoman text-5xl text-gray-800">
          More Books
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-4">
          {books.map((item, index) => (
            <Book key={index} book={item} />
          ))}
        </div>
      </div>

      {/* Subscribe Component */}
      <Subscribe />
    </>
  );
};

export default Books;
