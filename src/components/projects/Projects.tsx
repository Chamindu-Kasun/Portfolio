"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import projectImg from "../../../public/assets/eggburn.xyz/eggburn1.png";
import projectImg2 from "../../../public/assets/images/banner-image2.jpg";

const MyProjects = [
  { id: 1, name: "eggburn.xyz" },
  { id: 2, name: "chikn_store.xyz" },
  { id: 3, name: "NFT Marketplace" },
  { id: 4, name: "AWESOMEFIGHT" },
];

type ProjectProps = {
  selectedId: number | null;
  selectedProject: any;
  setSelectedId: (id: number | null) => void;
};

type AnimatedImageProps = {
  images: any[];
  height: number;
  width: number;
  alt: string;
};

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

const Project: React.FC<ProjectProps> = (props) => {
  const { selectedId, selectedProject, setSelectedId } = props;

  return (
    <motion.div
      whileHover={{ scale: 0.9 }}
      whileTap={{ scale: 0.8 }}
      className={
        selectedId === selectedProject.id
          ? "project__opened-card"
          : "project__card"
      }
      layout
      onClick={() => setSelectedId(selectedProject.id)}
    >
      {selectedId === selectedProject.id ? (
        <div></div>
      ) : (
        <div>{selectedProject.id}</div>
      )}
    </motion.div>
  );
};

const AnimatedImage: React.FC<AnimatedImageProps> = ({
  images,
  height,
  width,
  alt,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setIsLoaded(false);
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [images]);

  const currentImage = images[currentImageIndex];

  useEffect(() => {
    setIsLoaded(true);
  }, [currentImage]);

  return (
    <motion.div
      initial={false}
      animate={
        isLoaded && isInView
          ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
          : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
      }
      transition={{ duration: 1, delay: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => setIsInView(true)}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <Image
        src={currentImage}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        className="project-image"
      />
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const handleRedirectionToProject = () => {
    const url = `https://eggburn.xyz/`;
    const newTab = window.open(url, "_blank");
    if (newTab) {
      newTab.focus();
    } else {
      console.log("Opening new tab is blocked");
    }
  };
  return (
    <div className="projects">
      <div className="projects__title">
        MY <span>PORTFOLIO</span>
      </div>
      <div className="projects__container">
        {MyProjects.map((project, index) => (
          <Project
            key={index}
            selectedId={selectedId}
            selectedProject={project}
            setSelectedId={setSelectedId}
          />
        ))}
      </div>
      {selectedId && (
        <>
          <div className="projects__opened-project-overlay"></div>

          <div className="projects__opened-project">
            <motion.div
              className="box"
              animate={{
                scale: [0, 1],
                rotate: [-20, 0],
              }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
              }}
            >
              <button onClick={() => setSelectedId(null)}>❎</button>
              <div className="projects__opened-description">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                  className="projects__opened-image-container"
                  onClick={handleRedirectionToProject}
                >
                  <AnimatedImage
                    images={[projectImg, projectImg2, projectImg]}
                    height={250}
                    width={250}
                    alt="Project Image"
                  />
                </motion.div>
                <div className="description-text">
                  <p>
                    Eggburn.xyz is a project dedicated to creating dashboards
                    for investors of Chikn Farm (https://chikn.farm/), a
                    gamified NFT platform. Our platform provides statistical
                    information and insights to investors, empowering them with
                    data-driven decision-making capabilities. To access our
                    services, users are required to own a premium NFT
                    specifically designed for eggburn.xyz. I contributed as a
                    Full stack developer for this project (in CODIMITE pvt). We
                    utilized Next.js as our frontend framework, providing a
                    seamless and interactive user experience. On the backend, we
                    leveraged the power of Go as our programming language,
                    ensuring efficient and performant server-side operations. To
                    support our infrastructure and enhance our services, we
                    integrated various Google Cloud Platform (GCP) services such
                    as Google Cloud Store, Cloud Functions, and Cloud SQL. These
                    services enable us to store and retrieve data, execute
                    serverless functions, and manage our databases efficiently.
                    With eggburn.xyz, our goal was to empower investors with
                    comprehensive statistical information, enabling them to make
                    informed investment decisions on the Chikn Farm platform.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </div>
  );
};

export default Projects;
