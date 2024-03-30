import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import NewRealised from "./components/NewRealised";
import Biography from "./components/Biography";

const Home = () => {
  // Loading Books
  const books = useLoaderData();
  // Loaders
  const [authorLoader, setAuhorLoader] = useState(true);
  // datas
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    const featchAuthor = async () => {
      try {
        const response = await fetch(``);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = response.json();
        setAuthor(data);
        setAuhorLoader(false);
      } catch (error) {
        console.error(`Error featching data: ${error}`);
        setAuhorLoader(false);
      }
    };

    featchAuthor();

    // Cleanup function (optional)
    return () => {
      // perform cleanup here if necessary
    };
  }, []);

  return (
    <>
      {/** Passing the last book form the arrar object  */}
      <NewRealised book={books[books.length - 1]} />

      {/* Passing author data to Biography component */}
      {!authorLoader && <Biography author={author} />}
    </>
  );
};

export default Home;
