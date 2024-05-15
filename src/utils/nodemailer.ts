import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const password = process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
    host: "gmail",
    port: 587,
    secure: false, 
    auth: {
      user: email,
      pass: password,
    },
  });

  export const mailOptions = {
    from: email,
    to: email,
  };