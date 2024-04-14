import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const SocialMedia = () => {
  return (
    <div className="flex flex-row gap-10 lg:gap-5">
      <Link>
        <FaInstagram style={{ color: `#5f4ecb`, fontSize: "24px" }} />
      </Link>
      <Link>
        <FaFacebook style={{ color: `#5f4ecb`, fontSize: "24px" }} />
      </Link>
      <Link>
        <FaSquareXTwitter style={{ color: `#5f4ecb`, fontSize: "24px" }} />
      </Link>
      <Link>
        <FaYoutube style={{ color: `#5f4ecb`, fontSize: "24px" }} />
      </Link>
    </div>
  );
};

export default SocialMedia;
