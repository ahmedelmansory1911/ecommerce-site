const nodemailer = require("nodemailer");

// Nodemailer
const sendEmail = async (options) => {
  // 1) Create transporter ( service that will send email like "gmail","Mailgun", "mialtrap", sendGrid)
  console.log(process.env.EMAIL_USER);
  console.log(process.env.EMAIL_PASS);
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // 2) Define email options (like from, to, subject, email content)
  const mailOpts = {
    from: "Sahm App <sahm@i-c.sa>",
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  // 3) Send email
  await transporter.sendMail(mailOpts);
};

module.exports = sendEmail;
