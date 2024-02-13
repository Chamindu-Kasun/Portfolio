"use client";
import React from "react";
import Image from "next/image";
import Logo from "../../../public/assets/logo2.png";

type TopNavBarProps = {
  setSelected: (selection: string) => void;
  sectionRefs: {
    [key: string]: React.RefObject<HTMLElement> | null;
  };
};

const TopNavBar: React.FC<TopNavBarProps> = (props) => {
  const sections = ["Home", "Skills", "Experience", "Projects", "Contact"];
  const { setSelected, sectionRefs } = props;

  const handleSelection = (section: string) => {
    setSelected(section);
    // const selectedRef = sectionRefs[section];

    // if (selectedRef && selectedRef.current) {
    //   selectedRef.current.scrollIntoView({
    //     behavior: "smooth",
    //     block: "start",
    //   });
    // }

    const selectedRef = sectionRefs[section];
    if (selectedRef && selectedRef.current) {
      const element = selectedRef.current;

      // Calculate the offset relative to the document's top
      const offsetTop =
        element.getBoundingClientRect().top + window.pageYOffset;

      // Smooth scroll to the target section
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-list">
        <Image src={Logo} width={300} height={100} alt="Logo" />
        <ul>
          {sections.map((section, index) => (
            <li key={index}>
              <a
                className={`app__navbar-item`}
                onClick={() => handleSelection(section)}
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default TopNavBar;
