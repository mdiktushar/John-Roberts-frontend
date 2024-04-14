import React, { useState } from "react";
import logo from "../../assets/img/navbar/siteLogo.svg";
import { Link, NavLink } from "react-router-dom";

import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [cost, setCost] = useState(0);

  const handelSearch = (event) => {
    // Prevent the default behavior of form submission in React
    event.preventDefault();
    // Retrieve the value of the input field
    console.log(event.target.elements.search.value);
  };

  const navRoutes = (
    <>
      <li>
        <NavLink
          className={`text-base text-gray-900 lg:text-gray-500 hover:text-[#5f4ecb]`}
          to={`/`}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={`text-base text-gray-900 lg:text-gray-500 hover:text-[#5f4ecb]`}
          to={`books`}
        >
          Books
        </NavLink>
      </li>
      <li>
        <NavLink
          className={`text-base text-gray-900 lg:text-gray-500 hover:text-[#5f4ecb]`}
          to={`about-author`}
        >
          About Author
        </NavLink>
      </li>
      <li>
        <NavLink
          className={`text-base text-gray-900 lg:text-gray-500 hover:text-[#5f4ecb]`}
          to={`blog`}
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          className={`text-base text-gray-900 lg:text-gray-500 hover:text-[#5f4ecb]`}
          to={`contact`}
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar bg-base-100 pt-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 navRoute bg-[#5f4ecb] bg-opacity-70"
            >
              {navRoutes}
            </ul>
          </div>
          <Link to={``} className="btn btn-ghost text-xl">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 navRoute">{navRoutes}</ul>
        </div>
        <div className="navbar-end">
          {/* search */}
          <button
            className="btn btn-ghost btn-circle"
            onClick={() => document.getElementById("my_modal_2").showModal()}
          >
            <CiSearch style={{ color: `#5f4ecb`, fontSize: "24px" }} />
          </button>
          {/* cost */}
          <button className="btn btn-ghost btn-circle text-base text-[#5f4ecb]">
            {cost.toFixed(2) + `$`}
          </button>
          {/* cart */}
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <FiShoppingCart style={{ color: `#5f4ecb`, fontSize: "24px" }} />
              <span className="badge badge-xs badge-primary border-[#5f4ecb] text-[#5f4ecb] indicator-item">
                {numberOfItems}
              </span>
            </div>
          </button>
        </div>
      </div>
      {/* search modal */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box bg-white">
          <form onSubmit={handelSearch}>
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow border-gray-200 " name="search" id="search" placeholder="Search" />
              <kbd className="kbd kbd-sm">
                <CiSearch />
              </kbd>
            </label>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default Navbar;
