import Image from "next/image";

const HeaderImage: React.FC = () => {
  // const image02 = "https://storage.googleapis.com/portfolio_ck/JAN_5083.jpg";
  // const image03 = "https://storage.googleapis.com/portfolio_ck/JAN_5134.jpg";
  // const image04 = "https://storage.googleapis.com/portfolio_ck/JAN_5162.jpg";

  return (
    <div className="header__section-image">
      <Image
        src={"https://storage.googleapis.com/portfolio_ck/banner-image2.jpg"}
        width={300}
        height={300}
        alt="Picture of the author"
        className="header-image rotate-animation"
        unoptimized
      />
    </div>
  );
};

export default HeaderImage;
