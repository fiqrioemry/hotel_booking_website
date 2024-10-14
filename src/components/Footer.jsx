import React from "react";
import LogoWhite from "../assets/img/logo-white.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto flex flex-col justify-center items-center text-xl  text-white gap-4">
        <Link to="/">
          <img src={LogoWhite} alt="" />
        </Link>
        <div> Copyright &copy; 2023. All rights reserved</div>
      </div>
    </footer>
  );
};

export default Footer;
