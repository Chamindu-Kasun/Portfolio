import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 300,
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

type Project = {
  title: string;
  link: string;
  points: string[];
};

type ProjectModalProps = {
  project: Project | null;
  open: boolean;
  handleClose: () => void;
};

const ProjectModal: React.FC<ProjectModalProps> = (props) => {
  const { project, open, handleClose } = props;

  const handleRedirectionToProject = () => {
    const url = project?.link;
    const newTab = window.open(url, "_blank");
    if (newTab) {
      newTab.focus();
    } else {
      console.log("Opening new tab is blocked");
    }
  };

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="modal_container_experience">
          <Box className="modal_container_title">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {project?.title} Project
            </Typography>
            <Button onClick={handleClose}>
              <CloseIcon />
            </Button>
          </Box>
          <Box className="modal_container_description">
            <ul className="modal_container_description_experiance">
              {project?.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            <Box onClick={() => handleRedirectionToProject()}>
              <Typography
                className="modal_container_date"
                id="modal-modal-title"
                style={{ cursor: "pointer" }}
              >
                View {project?.title} Project
              </Typography>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default ProjectModal;
