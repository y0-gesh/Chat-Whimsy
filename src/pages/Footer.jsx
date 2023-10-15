import React from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { RiTwitterXFill } from "react-icons/ri";
import { AiFillLinkedin } from "react-icons/ai";

export default function Footer() {
  let FooterLinks = [
    { name: "About Us", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Contact", link: "/contact" },
    { name: "FAQs", link: "/about" },
    { name: "Support", link: "/contact" },
  ];
  return (
    <>
      <div className="py-24">
        <div className="flex items-center justify-between flex-col md:flex-row w-full">
          <div className="text-xl font-extrabold">
            <NavLink to="/">ChatWhimsy</NavLink>
          </div>
          <ul className="flex items-center flex-col sm:flex-row gap-x-6 gap-y-6 md:gap-x-10 mx-16 my-7 md:my-0">
            {FooterLinks.map((props) => (
              <li key={props.name}>
                {" "}
                <NavLink
                  to={props.link}
                  style={({ isActive }) => ({
                    color: isActive ? "black" : "black",
                  })}>
                  {props.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="flex gap-x-4 text-2xl">
            <BiLogoFacebookCircle />
            <AiOutlineInstagram />
            <RiTwitterXFill />
            <AiFillLinkedin />
          </div>
        </div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className="flex justify-center ">
          <span className="flex flex-col sm:flex-row gap-x-3 md:gap-x-5 text-sm sm:text-center items-center gap-y-4">
            <span className="order-last sm:order-first">
              © 2023{" "}
              <Link to="/" className="hover:underline">
                ChatWhimsy™
              </Link>
              . All Rights Reserved.
            </span>
            <Link to="/" className="font-medium  underline hover:no-underline">
              Privacy Policy
            </Link>
            <Link to="/" className="font-medium underline hover:no-underline">
              Terms and Conditions
            </Link>
            <Link to="/" className="font-medium underline hover:no-underline">
              Cookie Policy
            </Link>
          </span>
        </div>
      </div>
    </>
  );
}
