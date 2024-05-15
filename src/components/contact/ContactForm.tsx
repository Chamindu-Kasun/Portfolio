import { useState } from "react";
import { sendEmail } from "@src/services/sendEmail";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
        try {
          const response = await sendEmail(formData)
        } catch (error) {
          console.error("Error submitting form:", error);
          alert("An error occurred while sending the email.");
        }
    }
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };


  const validateForm = () => {
    const newErrors = {
      firstname: '',
      lastname: '',
      email: '',
      message: '',
    };

    if (!formData.firstname) newErrors.firstname = 'First name is required';
    if (!formData.lastname) newErrors.lastname = 'Last name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!validateEmail(formData.email)) newErrors.email = 'Email is not valid';
    if (!formData.message) newErrors.message = 'Message is required';

    setErrors(newErrors);

    return Object.values(newErrors).every(error => error === '');
  };

  return (
    <div className="contact-form-content">
      <form onSubmit={handleSubmit}>
        <div className="name-container">
          <input
            type="text"
            className="name-container_firstname"
            name="firstname"
            placeholder="First Name"
            value={formData.firstname}
            onChange={handleChange}
          />
          {errors.firstname && <span className="error">{errors.firstname}</span>}
          <input
            type="text"
            className="name-container_lastname"
            name="lastname"
            placeholder="Last Name"
            value={formData.lastname}
            onChange={handleChange}
          />
          {errors.lastname && <span className="error">{errors.lastname}</span>}
        </div>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}
        <textarea
          name="message"
          placeholder="Message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <span className="error">{errors.message}</span>}
        <button type="submit">SEND</button>
      </form>
    </div>
  );
};

export default ContactForm;
