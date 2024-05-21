import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import greetingImg from "../../../public/assets/images/Greetings.png";
import tryAgainImg from "../../../public/assets/images/TryAgain.png";

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
  isSendingMailSuceed:boolean;
  responseMsg: string;
  open: boolean;
  handleClose: () => void;
};

const ContactModal: React.FC<ContactModalProps> = (props) => {
  const { isSendingMailSuceed,responseMsg, open, handleClose } = props;

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="modal_container_contact">
          <Box className="modal_container_contact_title">
            <Button onClick={handleClose}>
              <CloseIcon />
            </Button>
          </Box>
          <Box className="modal_container_contact_content">
            <Box>
              <Typography
                className="modal_container_contact_response"
              >
                {responseMsg}
              </Typography>
            </Box>
            <Box>
                <Image
                    src={isSendingMailSuceed?greetingImg:tryAgainImg}            
                    alt={`project logo`}
                    className="project__card_icon"
                    unoptimized
                /> 
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default ContactModal;
