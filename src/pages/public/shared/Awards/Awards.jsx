import React, { useEffect, useState } from "react";
import Award from "./Award/Award";

const Awards = () => {
  const [loading, setLoading] = useState(true);
  const [awards, setAwards] = useState([]);

  useEffect(() => {
    const fetchAwards = async () => {
      try {
        const response = await fetch(`./data/awards.json`);
        const data = await response.json();
        setAwards(data);
        setLoading(false);
      } catch (exception) {
        console.error(`Error featching data: ${exception}`);
      }
    };

    fetchAwards();

    return () => {};
  }, []);

  // console.log(awards);

  return (
    <>
      {loading ? (
        <></>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-[10px] mt-[55px]">
          <hr className="mb-[20px] md:hidden" />
          {awards.map((item, index) => (
            <Award key={index} award={item} />
          ))}
        </div>
      )}
    </>
  );
};

export default Awards;
