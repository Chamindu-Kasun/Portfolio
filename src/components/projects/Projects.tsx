"use client";
import React, { useEffect, useState, forwardRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "../modals/ProjectModal";

type Project = {
  title: string;
  link: string;
  points: string[];
  images: string[];
};

const MyProjects = [
  {
    id: 1,
    title: "eggburn.xyz",
    link: "https://eggburn.xyz/",
    points: [
      "This project was dedicated to creating dashboards for investors of https://chikn.farm/, a gamified NFT platform.",
      "Provides statistical information and insights to investors, enabling data-driven decision-making.",
      "Users need to own a premium NFT specifically designed for eggburn.xyz to access its services.",
      "contributed as a full-stack developer for this project.",
      "Used Next.js as the frontend framework to ensure a seamless and interactive user experience. Used client-side and server-side rendering",
      "Used Golang as the backend language",
      "Integrated various Google Cloud Platform (GCP) services such as Google Cloud Store, Cloud Functions, and Cloud SQL.",
      "Got the exposure to Web3 development.",
      "Acquired skills in creating smart contracts, which are self-executing contracts with the terms of the agreement directly written into code.",
      "Got Familiar with Hardhat, a popular development environment for Ethereum smart contracts. Hardhat provides a comprehensive toolset for compiling, deploying, testing, and debugging smart contracts.",
      "Exposure to Avalanche, a blockchain platform known for its high throughput, low latency, and scalability. Learned about Avalanche's consensus mechanism and its compatibility with Ethereum Virtual Machine (EVM) smart contracts.",
    ],
    images: [
      "https://storage.googleapis.com/portfolio_ck/eggburn_images/1.jpg",
      "https://storage.googleapis.com/portfolio_ck/eggburn_images/2.png",
      "https://storage.googleapis.com/portfolio_ck/eggburn_images/3.jpeg",
      "https://storage.googleapis.com/portfolio_ck/eggburn_images/4.jpeg",
      "https://storage.googleapis.com/portfolio_ck/eggburn_images/5.jpeg",
    ],
  },
  {
    id: 2,
    title: "Excel(XLSX) To JSON Converter",
    link: "https://xlsx-to-json-converter.uc.r.appspot.com",
    points: [
      "Developed an online tool for converting large Excel (XLSX) files to JSON format for easier data manipulation and integration.",
      "Streamlined the process of handling extensive datasets by converting them to JSON, which is more versatile for programming.",
      "Implemented the application using Node.js.",
      "Utilized Google Cloud Platform (GCP) for hosting.",
      "Incorporated error handling and validation to ensure data integrity during the conversion process.",
      "Designed a user-friendly interface for seamless interaction and conversion of files.",
      "Used Express.js for the server-side framework to handle HTTP requests and routing.",
    ],
    images: [
      "https://storage.googleapis.com/portfolio_ck/XLSX%20to%20JSON%20converter/2.png",
      "https://storage.googleapis.com/portfolio_ck/XLSX%20to%20JSON%20converter/4.png",
      "https://storage.googleapis.com/portfolio_ck/XLSX%20to%20JSON%20converter/3.png",
      "https://storage.googleapis.com/portfolio_ck/XLSX%20to%20JSON%20converter/1.png",
    ],
  },
  {
    id: 3,
    title: "NFT Metadata Service",
    link: "https://github.com/Chamindu-Kasun/NFT_MetaDataService-Avalanche_Blockchain",
    points: [
      "Developed a backend service to retrieve metadata of NFTs on the Avalanche blockchain.",
      "Provides a streamlined solution for obtaining NFT metadata, similar to established providers like Moralis.",
      "Utilizes the ethers library to interact with Ethereum smart contracts.",
      "Ensures compatibility with various NFT contracts by using the ERC721 standard.",
      "Implemented the tokenURI function to retrieve the URI associated with specific tokens, following the ERC721 standard.",
      "Enabled interaction with various NFT contracts using a common ABI, eliminating the need for specific ABIs for each contract.",
      "Ensured efficient data retrieval and processing for NFT metadata.",
    ],
    images: [
      "https://storage.googleapis.com/portfolio_ck/NFT%20Metadata%20Service/1.jpg",
      "https://storage.googleapis.com/portfolio_ck/NFT%20Metadata%20Service/2.png",
      "https://storage.googleapis.com/portfolio_ck/NFT%20Metadata%20Service/3.jpeg",
      "https://storage.googleapis.com/portfolio_ck/NFT%20Metadata%20Service/4.jpeg",
      "https://storage.googleapis.com/portfolio_ck/NFT%20Metadata%20Service/5.png",
    ],
  },
  {
    id: 4,
    title: "SCSE Conference Website",
    link: "https://conf.kln.ac.lk/scse/index.php",
    points: [
      "Worked as a developer for the Smart Computing and Systems Engineering (SCSE) conference.",
      "Developed the platform using Joomla, ensuring a robust and user-friendly website.",
      "Gained a strong understanding of content management systems (CMS) such as Joomla and WordPress.",
      "Gained exposure to low-code and no-code solutions, enhancing rapid development skills."
    ],
    images: [
      "https://storage.googleapis.com/portfolio_ck/SCSE/1.png",
      "https://storage.googleapis.com/portfolio_ck/SCSE/2.png",
      "https://storage.googleapis.com/portfolio_ck/SCSE/3.png",
      "https://storage.googleapis.com/portfolio_ck/SCSE/4.png",
      "https://storage.googleapis.com/portfolio_ck/SCSE/5.png",
    ],
  },
];

const Projects = forwardRef<HTMLDivElement>((props, ref) => {
  const [open, setOpen] = useState<boolean>(false);
  const [project, setProject] = useState<Project | null>(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setProject(null);
    setOpen(false);
  };

  return (
    <>
      <div className="projects" ref={ref}>
        <div className="projects__title">
          MY <span>PORTFOLIO</span>
        </div>
        <div className="projects__container">
          {MyProjects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              handleOpen={handleOpen}
              setProject={setProject}
            />
          ))}
        </div>
      </div>
      <ProjectModal project={project} open={open} handleClose={handleClose} />
    </>
  );
});

export default Projects;
