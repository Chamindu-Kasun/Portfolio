const ContactForm: React.FC = () => {
  return (
    <div className="contact-form-content">
      <form>
        <div className="name-container">
          <input type="text" className="name-container_firstname" name="firstname" placeholder="First Name" />
          <input type="text" className="name-container_lastname" name="lastname" placeholder="Last Name" />
        </div>
        <input type="text" name="email" placeholder="Email" />
        <textarea name="message" placeholder="Message" rows={3} />
        <button>SEND</button>
      </form>
    </div>
  );
};

export default ContactForm;
