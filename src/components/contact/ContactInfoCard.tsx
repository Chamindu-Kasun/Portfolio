import MailOutlineIcon from "@mui/icons-material/MailOutline";
import GitHubIcon from "@mui/icons-material/GitHub";

type ContactInfoCardProps = {
  icon: string;
  text: string;
};

const ContactInfoCard: React.FC<ContactInfoCardProps> = (props) => {
  const { icon, text } = props;
  return (
    <div className="contact_details_card">
      <div className="contact_details_card_icon">
        {icon === "mail" ? <MailOutlineIcon /> : <GitHubIcon />}
      </div>
      {icon === "mail" ? (
        <p>{text}</p>
      ) : (
        <a
          href={"https://github.com/Chamindu-Kasun"}
          target="_blank"
          rel="noopener noreferrer"
        >
          {text}
        </a>
      )}
    </div>
  );
};

export default ContactInfoCard;
