import ContactForm from "./ContactForm";
import ContactInfoCard from "./ContactInfoCard";
import Title from "./Title";
import React, { forwardRef } from "react";

const Contact = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className="contact__section" ref={ref}>
      <Title />
      <div className="contact__content">
        <div className="contact__content_contactInfo">
          <ContactInfoCard icon="mail" text="chamindukasun074@gmail.com" />
          <ContactInfoCard icon="github" text="Chamindu-Kasun" />
        </div>

        <ContactForm />
      </div>
    </div>
  );
});

export default Contact;
