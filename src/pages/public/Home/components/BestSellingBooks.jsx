import React, { useEffect, useState } from "react";
import Book from "../../shared/Book/Book";
import { Link } from "react-router-dom";

const BestSellingBooks = () => {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(`./data/books.json`)
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .then(() => setLoading(false));
  }, []);

  return (
    <div className="mt-[55px] px-[30px]]">
      <div className="text-center max-w-[700px] mx-auto">
        <h2 className="TimeNewRoman font-semibold text-3xl text-gray-900 mb-2">
          Best Selling Books
        </h2>
        <p className="text-xs text-gray-500 mb-10">
          Vulputate vulputate eget cursus nam ultricies mauris, malesuada
          elementum lacus arcu, sit dolor ipsum, ac felis, egestas vel tortor
          eget aenean.
        </p>
      </div>
      <div className="flex flex-wrap gap-8 justify-center">
        {books.slice(0, 4).map((item, index) => (
          <Book key={index} book={item} />
        ))}
      </div>
      <div className="flex justify-center mt-[55px] mb-[55px]">
        <Link to={'books'} className="btn btn-outline border-[#5f4ecb] text-[#5f4ecb] hover:bg-[#5f4ecb] hover:text-white ">
          Shop All Books
        </Link>
      </div>
    </div>
  );
};

export default BestSellingBooks;
