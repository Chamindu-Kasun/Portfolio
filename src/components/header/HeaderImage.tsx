import ProfileImage from "../../../public/assets/images/banner-image2.jpg";
import Image from "next/image";

const HeaderImage: React.FC = () => {
  return (
    <div className="header__section-image">
      <Image
        src={ProfileImage}
        width={300}
        height={300}
        alt="Picture of the author"
        className="header-image rotate-animation"
      />
    </div>
  );
};

export default HeaderImage;
