import React from "react";
import { Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { bannerImg2 } from "../../assets/images/index";
import "./Header.scss";
import { Crown, HeartImoji, ThumbupImoji } from "../../assets/img";

type FloatingDivProps = {
  image: any;
  text1: string;
  text2: string;
};

const FloatingDiv: React.FC<FloatingDivProps> = (props) => {
  const { image, text1, text2 } = props;
  return (
    <div className={`floatingDiv`}>
      <img src={image} alt="floating_image" />
      <span>
        {text1}
        {text2}
      </span>
    </div>
  );
};

const HeaderImg: React.FC = () => {
  const transition = { duration: 2, type: "spring" };
  return (
    <div className="header-right">
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={bannerImg2} alt="profile_bg" />
      </motion.div>
      <div className="app__header-skills">
        <div className="floating-div-one">
          {" "}
          <FloatingDiv
            image={HeartImoji}
            text1="Frontend "
            text2="Development"
          />
        </div>
        <div className="floating-div-two">
          {" "}
          <FloatingDiv image={Crown} text1="Blockchain" text2=" Development" />
        </div>
        <div className="floating-div-three">
          {" "}
          <FloatingDiv
            image={ThumbupImoji}
            text1="Backend"
            text2=" Development"
          />
        </div>
      </div>
    </div>
  );
};

const Header: React.FC = () => {
  return (
    <Row className="d-flex flex-lg-row flex-md-row flex-column-reverse header">
      <Col xs={12} lg={6} md={6} className="p-lg-2">
        <HeaderImg />
      </Col>
      <Col xs={12} lg={6} md={6}>
        <div className="header_left">
          <div>
            <div className="d-flex align-items-center pb-1">
              <h3 className="m-0">Hey</h3>
              <div className="line-1"></div>
            </div>

            <h1>I'm Chamindu Kasun</h1>
            <p className="text-uppercase">
              Software Engineer | Blockchain Enthusiast | Researcher
            </p>
          </div>
          <div className="d-flex">
            <button className="resume_button">MY RESUME</button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Header;
