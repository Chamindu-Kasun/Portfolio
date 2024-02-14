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

type WorkExperience = {
  title: string;
  company: string;
  date: string;
  responsibilities: string[];
};

type ExperienceModalProps = {
  experience: WorkExperience | null;
  open: boolean;
  handleClose: () => void;
};

const ExperienceModal: React.FC<ExperienceModalProps> = (props) => {
  const { experience, open, handleClose } = props;

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
              {experience?.title} at {experience?.company}
            </Typography>
            <Button onClick={handleClose}>
              <CloseIcon />
            </Button>
          </Box>
          <Box className="modal_container_description">
            <Box>
              <Typography
                className="modal_container_date"
                id="modal-modal-title"
              >
                {experience?.date}
              </Typography>
            </Box>
            <ul className="modal_container_description_experiance">
              {experience?.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default ExperienceModal;
