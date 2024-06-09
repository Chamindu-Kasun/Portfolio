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
          <Box className="modal_container_description_edu">
          <h1>Education Levels and Subjects</h1>

          {subjects.map((levelObject, levelIndex) => {
            const levelName:any = Object.keys(levelObject)[0];
            const levelSubjects:any = levelObject[levelName];
            return (
              <Box key={levelIndex} className="edu_subjects">
                <h2>{levelName}</h2>
                <ul>
                  {levelSubjects.map((subject:any, subjectIndex:any) => (
                    <li key={subjectIndex}>{subject}</li>
                  ))}
                </ul>
              </Box>
            );
          })}
</Box>
        </Box>
      </Modal>
    </div>
  );
};

export default EducationModal;
