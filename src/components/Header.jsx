import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="fixed top-0 w-full">
      <div className="container mx-auto flex justify-between items-center h-[60px] py-2">
        <div className="logo">LOGO</div>
        <nav className="flex justify-between items-center gap-2 uppercase">
          <button>
            <Link to="#">home</Link>
          </button>
          <button>
            <Link to="#">rooms</Link>
          </button>
          <button>
            <Link to="#">restaurant</Link>
          </button>
          <button>
            <Link to="#">spa</Link>
          </button>
          <button>
            <Link to="#">spa</Link>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Header;
