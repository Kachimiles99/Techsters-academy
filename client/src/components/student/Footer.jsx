import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-navbar-bg md:px-36 text-left w-full mt-10">
      <div className="flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-10 border-b border-white/30">
        <div className="flex flex-col md:items-start items-center w-full">
          <img
            src={assets.techsters_logo}
            alt="logo"
            className="w-12 lg:w-16 transform translate-y-[-20px] "
          />
          <p className="mt-6 text-center md:text-left text-sm text-white/80 transform translate-y-[-30px] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            soluta placeat minima voluptatibus suscipit quia. Beatae recusandae
            distinctio eligendi magnam.
          </p>
        </div>
        <div className="flex flex-col md:items-start items-center w-full">
          <h2 className="font-semibold text-white mb-5">Company</h2>
          <ul className="flex md:flex-col w-full justify-between text-sm text-white/80 md:space-y-2">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="https://techsters.com.ng/about/">About us</a>
            </li>
            <li>
              <a href="https://techsters.com.ng/contact/">Contact us</a>
            </li>
            <li>
              <a href="#">Privacy policy</a>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex flex-col items-start w-full">
          <h2 className="font-semibold text-white mb-5">
            Subscribe to our newsletter
          </h2>
          <p className="text-sm text-white/80">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="flex items-center gap-2 pt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-500/30 bg-gray-800 text-gray-500 placeholder-gray-500 outline-none w-64 h-9 rounded px-2 text-sm"
            />
            <button className="bg-button-bg w-24 h-9 text-white rounded hover:bg-hover-bg hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <p className="py-4 text-center text-xs md:text-sm text-white/60">
        Copyright © 2025 Techsters. All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;
