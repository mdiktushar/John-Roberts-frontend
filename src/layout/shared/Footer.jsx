import React from "react";
import logo from "../../assets/img/footer/logoWhite.svg";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex flex-col bg-[#25272d] pt-[100px] pb-[50px] gap-10">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-around gap-10 lg:gap-12">
        <img className="w-[200px]" src={logo} alt="John Robert" />
        <div className="flex flex-row gap-5">
          <Link
            className={`text-base text-white hover:text-[#dbdbdb]`}
            to={`/`}
          >
            Home
          </Link>

          <Link
            className={`text-base text-white hover:text-[#dbdbdb]`}
            to={`books`}
          >
            Books
          </Link>

          <Link
            className={`text-base text-white hover:text-[#dbdbdb]`}
            to={`about-author`}
          >
            About Author
          </Link>

          <Link
            className={`text-base text-white hover:text-[#dbdbdb]`}
            to={`blog`}
          >
            Blog
          </Link>

          <Link
            className={`text-base text-white hover:text-[#dbdbdb]`}
            to={`contact`}
          >
            Contact
          </Link>
        </div>
        <div className="flex flex-row gap-10 lg:gap-5">
          <Link>
            <FaInstagram style={{ color: "white", fontSize: "24px" }} />
          </Link>
          <Link>
            <FaFacebook style={{ color: "white", fontSize: "24px" }} />
          </Link>
          <Link>
            <FaSquareXTwitter style={{ color: "white", fontSize: "24px" }} />
          </Link>
          <Link>
            <FaYoutube style={{ color: "white", fontSize: "24px" }} />
          </Link>
        </div>
      </div>
      <hr className="md:hidden mx-10" />
      <p className="text-white font-semibold text-center">
        Copyright © 2024 Md. Imrul Kayes
      </p>
    </div>
  );
};

export default Footer;
