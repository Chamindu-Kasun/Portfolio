import React, { useState } from "react";
import Title from "./Title";
import WorkExperiance from "./WorkExperiance";
import ExperienceModal from "../modals/ExperienceModal";

type WorkExperience = {
  title: string;
  company: string;
  date: string;
  responsibilities: string[];
};

const Experience: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [experience, setExperience] = useState<WorkExperience | null>(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setExperience(null);
    setOpen(false);
  };
  return (
    <>
      <div className="experience_section">
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
};

export default Experience;
