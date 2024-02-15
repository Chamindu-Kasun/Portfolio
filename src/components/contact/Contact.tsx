import ContactForm from "./ContactForm";
import ContactInfoCard from "./ContactInfoCard";
import Title from "./Title";

const Contact: React.FC = () => {
  return (
    <div className="contact__section">
      <Title />
      <div className="contact__content">
        <div className="contact__content_contactInfo">
          <ContactInfoCard icon="mail" text="chamindukasun074@gmail.com" />
          <ContactInfoCard icon="github" text="chamindukasun074@gmail.com" />
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
