import { getSubjects } from "@src/services/subjects";
import Card from "./Card";
import Title from "./Title";
import React, { forwardRef, useEffect, useState } from "react";
import EducationModal from "../modals/EducationModal";

const Education = forwardRef<HTMLDivElement>((props, ref) => {
  const [educationData, setEducationData] = useState([]);
  const [subjects, setSubjects] = useState<string[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = (subjects: string[]) => {
    setSubjects(subjects);
    setOpen(true);
  };

  const handleClose = () => {
    setSubjects([]);
    setOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSubjects();
        setEducationData(data);
      } catch (error) {
        console.error("Error fetching education data", error);
      }
    };
    fetchData();
  }, []);

  console.log(subjects);
  return (
    <>
      <div className="education_section" ref={ref}>
        <Title />
        <div className="education_content">
          {educationData.map((item, index) => (
            <Card key={index} data={item} handleOpen={handleOpen} />
          ))}
        </div>
      </div>
    <EducationModal open={open} subjects={subjects} handleClose={handleClose} />
    </>
  );
});

export default Education;
