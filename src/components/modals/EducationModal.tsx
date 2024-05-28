import { Box, Modal } from "@mui/material";

type EducationModalProps = {
  open: boolean;
  subjects: string[];
  handleClose: () => void;
};

const EducationModal: React.FC<EducationModalProps> = (props) => {
  const { open, subjects, handleClose } = props;
  return (
    <div>
      <Modal open={open}>
        <Box>
          <ul>
            {subjects.map((subject, index) => (
              <li>{subject}</li>
            ))}
          </ul>
        </Box>
      </Modal>
    </div>
  );
};

export default EducationModal;
