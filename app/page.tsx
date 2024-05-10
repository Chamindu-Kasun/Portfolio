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
import Footer from "@src/components/footer/Footer";

const DynamicAnimatedBackground = dynamic(
  () => import("../src/components/animated_bckground/AnimatedBackground"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const Home = () => {
  const [selected, setSelected] = useState<string>("Home");

  const homeRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const sectionRefs = {
    Home: homeRef,
    Skills: skillsRef,
    Experience: experienceRef,
    Education: educationRef,
    Projects: projectsRef,
    Contact: contactRef,
  };

  return (
    <React.Fragment>
      <TopNavBar setSelected={setSelected} sectionRefs={sectionRefs} />
      <div className="home_top_container" ref={homeRef}>
        <DynamicAnimatedBackground />
        <div className="home_top">
          <Header />
        </div>
      </div>

      <div className="home">
        <Skills ref={skillsRef} />
        <Experience ref={experienceRef} />
        <Education ref={educationRef} />
        <Projects ref={projectsRef} />
        <Contact ref={contactRef} />
        <Footer />
      </div>
      {/* <FireWorks /> */}
    </React.Fragment>
  );
};

export default Home;
