import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
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

type ContactModalProps = {
  responseMsg: string;
  open: boolean;
  handleClose: () => void;
};

const ContactModal: React.FC<ContactModalProps> = (props) => {
  const { responseMsg, open, handleClose } = props;

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="modal_container_experience">
          <Box className="modal_container_title">
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
                {responseMsg}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default ContactModal;