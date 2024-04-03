import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { title, image, price, category } = book;
  return (
    <div className="TimeNewRoman flex flex-col gap-1 font-">
      <Link>
        <img className="w-[200px] h-[300px] mb-2" src={image} alt={title} />
      </Link>
      <p className="text-xs text-gray-500">{category}</p>
      <Link>
        <h5 className="text-sm font-bold text-gray-950">{title}</h5>
      </Link>
      <h6 className="text-sm font-semibold text-gray-600">{price}$</h6>
    </div>
  );
};

export default Book;
