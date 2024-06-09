import React, { useState, forwardRef } from "react";
import Title from "./Title";
import WorkExperiance from "./WorkExperiance";
import ExperienceModal from "../modals/ExperienceModal";
import dynamic from "next/dynamic";

type WorkExperience = {
  title: string;
  company: string;
  date: string;
  responsibilities: string[];
};

const DynamicAnimatedBackground = dynamic(
  () => import("../animated_bckground/AnimatedBackgroundSkills"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const Experience = forwardRef<HTMLDivElement>((props, ref) => {
  const [open, setOpen] = useState<boolean>(false);
  const [experience, setExperience] = useState<WorkExperience | null>(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setExperience(null);
    setOpen(false);
  };
  return (
    <>
      <div className="experience_section" ref={ref}>
         <DynamicAnimatedBackground />
        <div className="experience_container">
          <Title />
          <WorkExperiance
            handleOpen={handleOpen}
            setExperience={setExperience}
          />
        </div>
      </div>
      <ExperienceModal
        experience={experience}
        open={open}
        handleClose={handleClose}
      />
    </>
  );
});

export default Experience;
