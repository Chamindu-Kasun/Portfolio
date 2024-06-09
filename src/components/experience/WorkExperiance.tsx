import { useEffect, useState } from "react";
import Work from "./Work";
import WorkMobile from "./WorkMobile";
import { getExperience } from "@src/services/experience";

type WorkExperience = {
  title: string;
  company: string;
  date: string;
  responsibilities: string[];
};

type WorkExperianceProps = {
  handleOpen: (open: boolean) => void;
  setExperience: React.Dispatch<React.SetStateAction<WorkExperience | null>>;
};

const WorkExperiance: React.FC<WorkExperianceProps> = (props) => {
  const [workExperienceData, setWorkExperienceData] = useState([]);
  const { handleOpen, setExperience } = props;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getExperience();
        setWorkExperienceData(data);
      } catch (error) {
        console.error("Error fetching skills:", error);
      }
    };
    fetchData();
  }, []);

  
  return (
    <>
      <div className="experiance_section_timeline">
        {workExperienceData.map((work, index) => (
          <Work
            key={index}
            work={work}
            index={index}
            handleOpen={handleOpen}
            setExperience={setExperience}
            length={workExperienceData.length}
          />
        ))}
      </div>
      <div className="experiance_section_timeline_mobile">
        {workExperienceData.map((work, index) => (
          <div key={index} className="experiance_card_mobile">
            <div className="experiance_card_mobile_line">
              <div className="timeline__left_mobile">
                <div className="timeline__point"></div>
              </div>
            </div>
            <div>
              <WorkMobile
                key={index}
                work={work}
                index={index}
                handleOpen={handleOpen}
                setExperience={setExperience}
                length={workExperienceData.length}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WorkExperiance;
