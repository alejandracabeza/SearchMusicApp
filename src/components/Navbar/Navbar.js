import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import ListIcons from "../ListIcons/ListIcons";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <SearchBar />
        <ListIcons />
      </nav>
    </div>
  );
};

export default Navbar;
