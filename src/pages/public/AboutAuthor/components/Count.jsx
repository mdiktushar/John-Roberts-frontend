import React, { useState } from "react";
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";

const Count = ({ number_of_books, awards, copies_sold }) => {
  const [sold, setSold] = useState(0);
  const [books, setBooks] = useState(0);
  const [award, setAward] = useState(0);

  const handleSoldChange = (isVisible) => {
    if (isVisible) {
      setSold(copies_sold);
    }
  };
  const handleBooksChange = (isVisible) => {
    if (isVisible) {
      setBooks(number_of_books);
    }
  };
  const handleAwardChange = (isVisible) => {
    if (isVisible) {
      setAward(awards);
    }
  };

  return (
    <div>
      <div className="flex justify-center px-[30px]">
        <div className="grid grid-cols-2 lg:grid-cols-3 max-w-[700px] ">
          <InView as="div" onChange={handleSoldChange}>
            <div className="col-span-2 lg:col-span-1 min-w-28 text-center">
              <h1 className="text-5xl font-bold text-gray-600">
                <CountUp end={sold} duration={5} />
                K+
              </h1>
              <p className="mt-3 text-gray-700">COPIES SOLD</p>
            </div>
          </InView>
          <InView as="div" onChange={handleBooksChange}>
            <div className="min-w-28 text-center">
              <h1 className="text-5xl font-bold text-gray-600">
                <CountUp end={books} duration={9} />
              </h1>
              <p className="mt-3 text-gray-700">BOOKS</p>
            </div>
          </InView>
          <InView as="div" onChange={handleAwardChange}>
            <div className="min-w-28 text-center">
              <h1 className="text-5xl font-bold text-gray-600">
                <CountUp end={award} duration={12} />
              </h1>
              <p className="mt-3 text-gray-700">AWARDS</p>{" "}
            </div>
          </InView>
        </div>
      </div>
    </div>
  );
};

export default Count;
