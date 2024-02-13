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
};

const Work: React.FC<WorkProps> = (props) => {
  const { work, index, handleOpen, setExperience } = props;

  const handleMore = () => {
    setExperience(work);
    handleOpen(true);
  };

  return (
    <>
      {index % 2 === 0 ? (
        <>
          <div className="timeline__component">
            <div className="timeline__date timeline__date--right">
              {work.date}
            </div>
          </div>
          <div className="timeline__middle">
            <div className="timeline__point"></div>
          </div>
          <div className="timeline__component timeline__component--bg">
            <h2 className="company">{work.title}</h2>
            <h3>{work.company}</h3>
            <p>{work.responsibilities[0]}</p>
            <button onClick={() => handleMore()}>Show more</button>
            {/* <ul>
              {work.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
              
            </ul> */}
          </div>
        </>
      ) : (
        <>
          <div className="timeline__component timeline__component--bg">
            <h2 className="company">{work.title}</h2>
            <h3>{work.company}</h3>
            <p>{work.responsibilities[0]}</p>
            <button onClick={() => handleMore()}>Show more</button>
            {/* <ul>
              {work.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul> */}
          </div>
          <div className="timeline__middle">
            <div className="timeline__point"></div>
          </div>
          <div className="timeline__component">
            <div className="timeline__date">{work.date}</div>
          </div>
        </>
      )}
    </>
  );
};

export default Work;
