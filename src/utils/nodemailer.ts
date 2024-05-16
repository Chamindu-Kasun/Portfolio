import nodemailer from "nodemailer";
import smtpTransport from "nodemailer-smtp-transport";
const email = process.env.EMAIL;
const email_password = process.env.EMAIL_PASS;
const receiver_email = process.env.RECEIVER_EMAIL;

export const transporter = nodemailer.createTransport(smtpTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false, 
    auth: {
      user: email,
      pass: email_password,
    },
  }));

export const mailOptions = {
    from: email,
    to: email,
};