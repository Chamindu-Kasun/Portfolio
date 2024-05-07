import { WorkExperience } from "../../utils/work_experiance";
import Work from "./Work";
import WorkMobile from "./WorkMobile";

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
  const { handleOpen, setExperience } = props;
  return (
    <>
      <div className="experiance_section_timeline">
        {WorkExperience.map((work, index) => (
          <Work
            key={index}
            work={work}
            index={index}
            handleOpen={handleOpen}
            setExperience={setExperience}
            length={WorkExperience.length}
          />
        ))}
      </div>
      <div className="experiance_section_timeline_mobile">
        {WorkExperience.map((work, index) => (
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
                length={WorkExperience.length}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WorkExperiance;
