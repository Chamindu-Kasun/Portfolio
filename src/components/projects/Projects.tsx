"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import projectImg from "../../../public/assets/eggburn.xyz/eggburn1.png";
import projectImg2 from "../../../public/assets/images/banner-image2.jpg";
import ProjectCard from "./ProjectCard";
import ProjectModal from "../modals/ProjectModal";

type Project = {
  title: string;
  link: string;
  points: string[];
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
  },
  {
    id: 2,
    title: "chikn_store.xyz",
    link: "",
    points: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    id: 3,
    title: "NFT Marketplace",
    link: "",
    points: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    id: 4,
    title: "AWESOMEFIGHT",
    link: "",
    points: ["React", "Next.js", "Tailwind CSS"],
  },
];

const Projects: React.FC = () => {
  // const [selectedId, setSelectedId] = useState<number | null>(null);

  const [open, setOpen] = useState<boolean>(false);
  const [project, setProject] = useState<Project | null>(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setProject(null);
    setOpen(false);
  };

  return (
    <>
      <div className="projects">
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
};

export default Projects;
