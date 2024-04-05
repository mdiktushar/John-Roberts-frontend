import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import PageLoader from "../shared/PageLoader";

const MainLayout = () => {
  const [pageLoader, setPageLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoader(false);
    }, 3000); // 3 Seconds

    return () => clearTimeout(timer); // Empty dependency array ensures useEffect runs only once after initial render
  }, []);

  return (
    <>
      {pageLoader ? (
        <PageLoader />
      ) : (
        <div className="">
          <Navbar />
          <div className="">
            <Outlet />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default MainLayout;
