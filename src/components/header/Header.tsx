"use client";
import React from "react";
import HeaderContent from "./HeaderContent";
import HeaderImage from "./HeaderImage";

const Header: React.FC = () => {
  return (
    <React.Fragment>
      <div className="header__section">
        <HeaderImage />
        <HeaderContent />
      </div>
    </React.Fragment>
  );
};

export default Header;
