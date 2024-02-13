import { WorkExperience } from "../../utils/work_experiance";
import Work from "./Work";

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
    <div className="experiance_section_timeline">
      {WorkExperience.map((work, index) => (
        <Work
          key={index}
          work={work}
          index={index}
          handleOpen={handleOpen}
          setExperience={setExperience}
        />
      ))}
    </div>
  );
};

export default WorkExperiance;
