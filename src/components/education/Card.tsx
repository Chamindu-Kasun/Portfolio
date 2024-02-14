import Image from "next/image";

type CardProps = {
  data: {
    id: number;
    digree: string;
    institute: string;
    date: string;
    imageURL: string;
  };
};

const Card: React.FC<CardProps> = (props) => {
  const { data } = props;
  return (
    <div className="education_card">
      <div className="education_card_details">
        <h3>{data?.digree}</h3>
        <h4>{data?.institute}</h4>
        <p>{data?.date}</p>
      </div>
      <div className="education_card_image">
        <Image
          src={data?.imageURL}
          width={80}
          height={80}
          alt={`university logo`}
          className="university_icon"
          unoptimized
        />
      </div>
    </div>
  );
};

export default Card;
