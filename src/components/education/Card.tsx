import Image from "next/image";

type CardProps = {
  data: {
    degree: string;
    university: string;
    from_to: string;
    imageURL: string;
    subjects:any[]
  };
  handleOpen: (subjects:string[]) => void;
};

const Card: React.FC<CardProps> = (props) => {
  const { data,handleOpen } = props;

  const handleShowSubjects = () => {
    handleOpen(data?.subjects)
  }

  return (
    <div className="education_card">

        <div className="education_card_details">
          <h3>{data?.degree}</h3>
          <h4>{data?.university}</h4>
          <p>{data?.from_to}</p>
        </div>
        <div className="education_card_image">
          <Image
            src={data?.imageURL}
            width={100}
            height={100}
            alt={`university logo`}
            className="university_icon"
            unoptimized
          />
        </div>

      <div>
        <button onClick={() => handleShowSubjects()}>Subjects learned</button>
      </div>
    </div>
  );
};

export default Card;
