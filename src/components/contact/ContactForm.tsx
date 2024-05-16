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
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await sendEmail(formData);
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
      firstname: "",
      lastname: "",
      email: "",
      message: "",
    };

    if (!formData.firstname) newErrors.firstname = "First name is required";
    if (!formData.lastname) newErrors.lastname = "Last name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!validateEmail(formData.email))
      newErrors.email = "Email is not valid";
    if (!formData.message) newErrors.message = "Message is required";

    setErrors(newErrors);

    return Object.values(newErrors).every((error) => error === "");
  };

  return (
    <div className="contact-form-content">
      <form onSubmit={handleSubmit}>
        <div className="input_field_section">
          <input
            type="text"
            className={errors.firstname?"input_error":""}
            name="firstname"
            placeholder="First Name"
            value={formData.firstname}
            onChange={handleChange}
          />
          {errors.firstname && (
            <span className="error_message">{errors.firstname}</span>
          )}
        </div>
        <div className="input_field_section">
          <input
            type="text"
            className={errors.lastname?"input_error":""}
            name="lastname"
            placeholder="Last Name"
            value={formData.lastname}
            onChange={handleChange}
          />
          {errors.lastname && <span className="error_message">{errors.lastname}</span>}
        </div>

        <div className="input_field_section">
          <input
            type="text"
            name="email"
            className={errors.email?"input_error":""}
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error_message">{errors.email}</span>}
        </div>
        <div className="input_field_section">
          <textarea
            name="message"
            placeholder="Message"
            className={errors.message?"input_error":""}
            rows={10}
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <span className="error_message">{errors.message}</span>}
        </div>
        <button type="submit">SEND</button>
      </form>
    </div>
  );
};

export default ContactForm;
