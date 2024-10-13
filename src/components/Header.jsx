import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 w-full">
      <div className="container mx-auto flex justify-between items-center h-[60px] py-2">
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
