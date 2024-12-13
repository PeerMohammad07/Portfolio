"use server";

import nodemailer from "nodemailer";
import { validateString, getErrorMessage } from "@/lib/utils";

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail") as string | null;
  const message = formData.get("message") as string | null;

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", 
    port: 465, 
    secure: true,
    auth: {
      user: process.env.EMAIL, 
      pass: process.env.SMTP_PASS, 
    },
  });

  // Email options
  const mailOptions = {
    from: `"Contact Form" <${process.env.EMAIL}>`, 
    to: "peeru548@gmail.com", 
    subject: "Message from contact form",
    replyTo: senderEmail, 
    html: `<p><strong>Message:</strong> ${message}</p><p><strong>From:</strong> ${senderEmail}</p>`, 
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return {
      data: info, 
    };
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
};
