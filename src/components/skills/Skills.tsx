import SkillTypes from "./SkillTypes";
import Title from "./Title";
import dynamic from "next/dynamic";
import React, { forwardRef } from "react";

const DynamicAnimatedBackground = dynamic(
  () => import("../animated_bckground/AnimatedBackgroundSkills"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const Skills = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className="skills_section" ref={ref}>
      {/* <DynamicAnimatedBackground /> */}
      <div className="skills_container">
        <Title />
        <SkillTypes />
      </div>
    </div>
  );
});

export default Skills;
