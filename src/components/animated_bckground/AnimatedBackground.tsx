import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const AnimatedBackground: React.FC = () => {
  const [hasWindow, setHasWindow] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  return (
    <div className="home_animation">
      {hasWindow && (
        <ReactPlayer
          url={
            "https://storage.googleapis.com/portfolio_ck/animation_-_4518%20(540p).mp4"
          }
          controls={false}
          playing={true}
          light={false}
          loop={true}
          muted={true}
          pip={true}
          width={"2000px"}
          height={"2000px"}
        />
      )}
    </div>
  );
};

export default AnimatedBackground;
