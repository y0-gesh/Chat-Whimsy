import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CoverImg from "../imges/Windows-11-Bloom.jpg";
import ChatImg from "../imges/frozaHorizon.jpg";
import ChatImg2 from "../imges/aCRogue.jpg";
import { FaCube } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="my-6 sm:my-10 md:my-20 absolute w-full px-8 md:px-20">
        <div className="py-24 w-full">
          <h1 className="text-5xl md:text-6xl font-bold">Real Time Chat Web App:</h1>
          <h1 className="text-5xl md:text-6xl font-bold md:mt-3">
            Connect and Chat with Ease
          </h1>
          <div className="my-10 text-lg md:text-sm ">
            Experience seamless communication with our real-time chat web app.
            Sign up or Log in now!
          </div>
          <div className="flex items-center gap-x-4">
            <button
              type="button"
              className="text-white bg-black hover:text-white border border-black hover:bg-white focus:ring-1 focus:outline-none focus:ring-black font-medium rounded-none text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-black dark:text-white dark:hover:text-black dark:hover:bg-white dark:focus:ring-black">
              Sign Up
            </button>
            <button
              type="button"
              className="text-white hover:text-white border border-black hover:bg-white focus:ring-1 focus:outline-none focus:ring-black font-medium rounded-none text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-black dark:text-black dark:hover:text-white dark:hover:bg-black dark:focus:ring-black">
              Log In
            </button>
          </div>
          <img
            src={CoverImg}
            className="mt-20 aspect-video w-full"
            alt="Chat Cover"
          />
        </div>
        <div className="flex items-center flex-col sm:flex-row py-24 w-full">
          <div className="w-full md:w-1/2 md:mr-10">
            <FaCube className="text-4xl my-6 md:my-10" />
            <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold">
              Experiene Reat-Time Chat and Connect with Other Instantly
            </h1>
            <div className="my-6 md:my-10">
              Our real-time chat features allows you to communicate with
              friends, family and colleagues in an instant. Stay connected and
              never miss a beat.
            </div>
          </div>
          <div className="w-full md:w-1/2 md:ml-10">
            <img
              src={ChatImg}
              className="w-full aspect-square object-cover"
              alt="Chat Cover"
            />
          </div>
        </div>
        <div className="flex items-center flex-col sm:flex-row py-24 w-full">
          <div className="w-full md:w-1/2 md:mr-10">
            <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold">
              Secure User Authentication System with Advanced Security Measures
            </h1>
            <div className="my-6 md:my-10 ">
              Our user authentication system ensures secure access to your
              account, protecting your personal information.
            </div>
            <div className="flex flex-col sm:flex-row">
              <div>
                <h1 className="text-4xl font-bold">50%</h1>
                <div className="my-4">
                  Robust security measures to safeguard your data.
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-bold">50%</h1>
                <div className="my-4">
                  Peace of mind with our top-notch security features.
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 md:ml-10">
            <img
              src={ChatImg2}
              className="w-full aspect-square object-cover"
              alt="Chat Cover"
            />
          </div>
        </div>
        <div className="flex items-start flex-col sm:flex-row md:justify-between py-24 w-full">
          <div className="sm:w-2/3">
            <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold">
              Experience Reat-Time Chat Web App
            </h1>
            <div className="my-5 ">
              Sign up or Log in to join the conversation.
            </div>
          </div>
          <div className="flex items-center gap-x-4">
            <button
              type="button"
              className="text-white bg-black hover:text-white border border-black hover:bg-white focus:ring-1 focus:outline-none focus:ring-black font-medium rounded-none text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-black dark:text-white dark:hover:text-black dark:hover:bg-white dark:focus:ring-black">
              Sign Up
            </button>
            <button
              type="button"
              className="text-white hover:text-white border border-black hover:bg-white focus:ring-1 focus:outline-none focus:ring-black font-medium rounded-none text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-black dark:text-black dark:hover:text-white dark:hover:bg-black dark:focus:ring-black">
              Log In
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
