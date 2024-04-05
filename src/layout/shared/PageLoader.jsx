import React from "react";
import { Puff } from "react-loader-spinner";

const PageLoader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Puff
        visible={true}
        height="250"
        width="250"
        color="#5f4ecb"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default PageLoader;
