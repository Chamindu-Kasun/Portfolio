import Image from "next/image";

type Project = {
  title: string;
  link: string;
  points: string[];
  images: string[];
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
        src={project?.images[0]}
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
