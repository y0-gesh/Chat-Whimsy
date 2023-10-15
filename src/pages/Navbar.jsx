import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GrMenu } from "react-icons/gr";
import { GrClose } from "react-icons/gr";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className={`fixed w-full z-50 flex flex-col md:flex-row gap-y-10 md:justify-between md:items-center border-black bg-white navbar items-start transition-all duration-500 ease-in ${open ? 'h-full' : 'h-16 overflow-hidden'}`}>
      <button className="md:hidden" onClick={() => setOpen(!open)}>
        {open ? (
          <GrClose className="absolute right-10 top-6 text-lg md:hidden" />
        ) : (
          <GrMenu className="absolute right-10 top-6 text-lg md:hidden" />
        )}
      </button>
      <ul className="flex flex-col items-start md:items-center gap-x-10 gap-y-10 mx-8 md:mx-16 w-full -mt-5 md:flex-row md:mt-0">
        <div className="text-xl font-extrabold">
          <NavLink to="/">ChatWhimsy</NavLink>
        </div>
        <li>
          {" "}
          <NavLink
            to="/about"
            style={({ isActive }) => ({
              color: isActive ? "blue" : "black",
            })}>
            About Us
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            to="/services"
            style={({ isActive }) => ({
              color: isActive ? "blue" : "black",
            })}>
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            style={({ isActive }) => ({
              color: isActive ? "blue" : "black",
            })}>
            Contact
          </NavLink>
        </li>
      </ul>
      <div className="flex flex-col md:flex-row items-center gap-x-4 px-10 md:px-20 w-full md:justify-end">
        <button
          type="button"
          className="text-white hover:text-white border border-black hover:bg-white focus:ring-1 focus:outline-none focus:ring-black font-medium rounded-none text-sm px-5 py-2.5 text-center mr-2 mb-2 w-full md:w-28 dark:border-black dark:text-black dark:hover:text-white dark:hover:bg-black dark:focus:ring-black">
          Log In
        </button>
        <button
          type="button"
          className="text-white bg-black hover:text-white border border-black hover:bg-white focus:ring-1 focus:outline-none focus:ring-black font-medium rounded-none text-sm px-5 py-2.5 text-center mr-2 mb-2 w-full md:w-28 dark:border-black dark:text-white dark:hover:text-black dark:hover:bg-white dark:focus:ring-black">
          Sign Up
        </button>
      </div>
    </nav>
  );
}
