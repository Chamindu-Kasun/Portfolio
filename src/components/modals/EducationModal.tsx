import { Box, Modal, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  border: "2px solid #000",
  boxShadow: 24,
  width: "60%",
  height: "80%",
  "@media (max-width: 780px)": {
    width: "80%",
    height: "80%",
  },
};

type EducationModalProps = {
  open: boolean;
  subjects: string[];
  handleClose: () => void;
};

const EducationModal: React.FC<EducationModalProps> = (props) => {
  const { open, subjects, handleClose } = props;
  console.log(subjects);
  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="modal_container_education">
          <Box className="modal_container_edu_close">
            <Button onClick={handleClose}>
              <CloseIcon />
            </Button>
          </Box>
          <h1>Works</h1>
          {/* <ul>
            {subjects.map((subject, index) => (
              <li>{subject}</li>
            ))}
          </ul> */}
        </Box>
      </Modal>
    </div>
  );
};

export default EducationModal;
