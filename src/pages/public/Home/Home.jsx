import React from "react";
import { useLoaderData } from "react-router-dom";
import NewRealised from "./components/NewRealised";

const Home = () => {
  // Loading Books
  const books = useLoaderData();

  return (
    <>
      {/** Padding the last book form the arrar object  */}
      <NewRealised book={books[books.length - 1]} />


    </>
  );
};

export default Home;
