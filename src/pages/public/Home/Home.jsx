import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import NewRealised from "./components/NewRealised";
import Biography from "./components/Biography";
import Awards from "../shared/Awards/Awards";
import BestSellingBooks from "./components/BestSellingBooks";
import Subscribe from "../shared/Subscribe/Subscribe";


const Home = () => {
  // Loading Books
  const books = useLoaderData();
  // Loaders
  const [authorLoader, setAuhorLoader] = useState(false);
  // datas
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    try {
      fetch(`./data/author.json`)
      .then((res) => res.json())
      .then((data) => setAuthor(data)).then(() => setAuhorLoader(true))
    } catch(exception) {
      console.error(exception)
    }
    
  }, []);

  return (
    <>
      {/** Passing the last book form the arrar object  */}
      <NewRealised book={books[books.length - 1]} />

      {/* Passing author data to Biography component */}
      {authorLoader && <Biography author={author} />}
      {/* Awards Section */}
      <Awards />
      {/* Best Selling Books */}
      <BestSellingBooks />
      {/* Subscribe Component */}
      <Subscribe />
    </>
  );
};

export default Home;
