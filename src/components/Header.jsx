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
        header ? "bg-white shadow-lg py-8" : "bg-none py-6"
      } fixed top-0 w-full z-[999]   transition-all duration-300`}
    >
      <div className="container mx-auto flex justify-between items-center  ">
        <div className="logo">
          <img src="#" alt="" />
        </div>
        <nav className="flex justify-between items-center gap-2 uppercase">
          <Link to="#">home</Link>
          <Link to="#">rooms</Link>
          <Link to="#">restaurant</Link>
          <Link to="#">spa</Link>
          <Link to="#">contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
