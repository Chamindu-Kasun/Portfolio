import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const AnimatedBackgroundSkills: React.FC = () => {
  const [hasWindow, setHasWindow] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  return (
    <div className="skills_animation">
      {hasWindow && (
        <ReactPlayer
          url={
            "https://storage.googleapis.com/portfolio_ck/production_id_5091624%20(1080p).mp4"
          }
          controls={false}
          playing={true}
          light={false}
          loop={true}
          muted={true}
          pip={true}
          width={"60%"}
          height={"60%"}
        />
      )}
    </div>
  );
};

export default AnimatedBackgroundSkills;
