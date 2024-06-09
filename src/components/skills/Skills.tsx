import SkillTypes from "./SkillTypes";
import Title from "./Title";
import React, { forwardRef } from "react";



const Skills = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className="skills_section" ref={ref}>
      <div className="skills_container">
        <Title />
        <SkillTypes />
      </div>
    </div>
  );
});

export default Skills;
