import Image from "next/image";

type CardProps = {
  title: string;
  iconUrl: string;
  isActive: boolean;
  handleSelection: () => void;
};

const Card: React.FC<CardProps> = (props) => {
  const { title, iconUrl, isActive, handleSelection } = props;
  return (
    <div
      className={` ${isActive ? "skills_card skill_active" : "skills_card"}`}
      onClick={() => handleSelection()}
    >
      <div className="skill_icon_section">
        <Image
          src={iconUrl}
          width={30}
          height={30}
          alt={`${title} skill logo`}
          className="skill_icon"
          unoptimized
        />
      </div>
      <span>{title}</span>
    </div>
  );
};

export default Card;
