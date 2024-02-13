import SkillTypes from "./SkillTypes";
import Title from "./Title";
import dynamic from "next/dynamic";

const DynamicAnimatedBackground = dynamic(
  () => import("../animated_bckground/AnimatedBackgroundSkills"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const Skills: React.FC = () => {
  return (
    <div className="skills_section">
      {/* <DynamicAnimatedBackground /> */}
      <div className="skills_container">
        <Title />
        <SkillTypes />
      </div>
    </div>
  );
};

export default Skills;
