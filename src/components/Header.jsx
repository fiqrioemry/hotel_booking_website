import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LogoWhite from "../assets/img/logo-white.svg";
import LogoDark from "../assets/img/logo-dark.svg";

const Header = () => {
  const [header, setHeader] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
  });
  return (
    <header
      className={`${
        header ? "bg-white shadow-lg py-6" : "bg-transparent py-8"
      } fixed top-0 w-full z-[999]   transition-all duration-300`}
    >
      <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between items-center gap-y-6  lg:gap-y-0">
        <Link to="/" className="logo">
          {header ? (
            <img className="w-[138px]" src={LogoDark} alt="" />
          ) : (
            <img className="[160px]" src={LogoWhite} alt="" />
          )}
        </Link>
        <nav
          className={`${
            header ? "text-primary" : "text-white"
          } flex justify-between gap-x-8 lg:gap-x-8 uppercase font-tertiary trackin-[3px] text-lg`}
        >
          <Link to="#" className="hover:text-accent transition">
            home
          </Link>
          <Link className="hover:text-accent transition" to="#">
            rooms
          </Link>
          <Link className="hover:text-accent transition" to="#">
            restaurant
          </Link>
          <Link className="hover:text-accent transition" to="#">
            spa
          </Link>
          <Link className="hover:text-accent transition" to="#">
            contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
