type WorkExperience = {
  title: string;
  company: string;
  date: string;
  responsibilities: string[];
};

type WorkProps = {
  work: WorkExperience;
  index: number;
  handleOpen: (open: boolean) => void;
  setExperience: React.Dispatch<React.SetStateAction<WorkExperience | null>>;
  length: number;
};

const WorkMobile: React.FC<WorkProps> = (props) => {
  const { work, index, handleOpen, setExperience, length } = props;

  const handleMore = () => {
    setExperience(work);
    handleOpen(true);
  };

  return (
    <>
      <>
        <div className="timeline__component">
          <div className="timeline__date">{work.date}</div>
        </div>
        <div className="timeline__component timeline__component--bg">
          <h2 className="company">{work.title}</h2>
          <h3>{work.company}</h3>
          <p>{work.responsibilities[0]}</p>
          <button onClick={() => handleMore()}>Show more</button>
        </div>
      </>
    </>
  );
};

export default WorkMobile;
