"use client";
import React, { useState, useEffect } from "react";
import MobileNavBar from "./MobileNavBar";
import DesktopNavBar from "./DesktopNavBar";

type TopNavBarProps = {
  setSelected: (selection: string) => void;
  sectionRefs: {
    [key: string]: React.RefObject<HTMLElement> | null;
  };
};

const TopNavBar: React.FC<TopNavBarProps> = (props) => {
  const sections = ["Home", "Skills", "Experience", "Projects", "Contact"];
  const { setSelected, sectionRefs } = props;
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const toggleMenu = () => setOpenMenu(!openMenu);

  const handleSelection = (section: string) => {
    setSelected(section);

    const selectedRef = sectionRefs[section];
    if (selectedRef && selectedRef.current) {
      const element = selectedRef.current;

      const offsetTop =
        element.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <MobileNavBar
        isOpen={openMenu}
        toggleMenu={toggleMenu}
        sections={sections}
        handleSelection={handleSelection}
      />
      <DesktopNavBar
        sections={sections}
        handleSelection={handleSelection}
        toggleMenu={toggleMenu}
        openMenu={openMenu}
      />
    </>
  );
};

export default TopNavBar;
