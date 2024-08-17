import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="text-2xl text-gray-200 hover:text-gray-400 hover:underline">Piers Sinclair</Link>
        <Link to="/about" className="text-lg text-gray-200 hover:text-gray-400 hover:underline">About</Link>
      </div>
      <hr className="border-gray-700 mt-4" />
    </header>
  );
}

export default Header;
