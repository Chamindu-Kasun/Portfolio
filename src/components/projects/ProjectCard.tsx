import { useState } from "react";
import Image from "next/image";
import projectImg from "../../../public/assets/eggburn.xyz/eggburn1.png";

{
  /* <p>
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
</p> */
}

type Project = {
  title: string;
  link: string;
  points: string[];
};

type ProjectCardProps = {
  project: Project;
  handleOpen: (open: boolean) => void;
  setProject: React.Dispatch<React.SetStateAction<Project | null>>;
};

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const { project, handleOpen, setProject } = props;

  const handleShowProject = () => {
    handleOpen(true);
    setProject(project);
  };

  return (
    <div className="project__card">
      <Image
        src={projectImg}
        width={150}
        height={200}
        alt={`project logo`}
        className="project__card_icon"
        unoptimized
      />
      <button className="project__card_name" onClick={handleShowProject}>
        {project?.title}
      </button>
    </div>
  );
};

export default ProjectCard;
