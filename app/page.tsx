"use client";
import Experience from "@src/components/experience/Experience";
import FireWorks from "@src/components/fireWorks/FireWorks";
import Header from "@src/components/header/Header";
import Projects from "@src/components/projects/Projects";
import Skills from "@src/components/skills/Skills";
import TopNavBar from "@src/components/top-navbar/TopNavBar";
import React, { useState, useRef } from "react";
import dynamic from "next/dynamic";
import Education from "@src/components/education/Education";
import Contact from "@src/components/contact/Contact";

const DynamicAnimatedBackground = dynamic(
  () => import("../src/components/animated_bckground/AnimatedBackground"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const Home = () => {
  const [selected, setSelected] = useState<string>("Home");

  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  // const experienceRef = useRef(null);

  const sectionRefs = {
    About: aboutRef,
    Skills: skillsRef,
    Projects: projectsRef,
    // Experience: experienceRef,
  };

  return (
    <React.Fragment>
      <div className="home_top_container">
        <DynamicAnimatedBackground />
        <div className="home_top">
          <TopNavBar setSelected={setSelected} sectionRefs={sectionRefs} />
          <Header />
        </div>
      </div>
      <div className="home">
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
        {/* {showSection()} */}
        {/* {selected === "Home" && <FireWorks />} */}
      </div>

      {/* </div> */}
    </React.Fragment>
  );
};

export default Home;
