import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";


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

type Project = {
  title: string;
  link: string;
  points: string[];
  images: string[];
};

type ProjectModalProps = {
  project: Project | null;
  open: boolean;
  handleClose: () => void;
};

const ProjectModal: React.FC<ProjectModalProps> = (props) => {
  const { project, open, handleClose } = props;

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };



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
          <Box className="modal_container_slider">
            <Slider {...sliderSettings}>
              {project?.images.map((image, index) => (
                <div key={index} className="modal_container_slider_image">
                  <Image
                    src={image}
                    alt={`project image ${index + 1}`}
                    width={250}
                    height={250}
                    unoptimized
                    style={{borderRadius:"10px"}}
                  />
                </div>
              ))}
            </Slider>
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
