const nodemailer = require("nodemailer");
require("dotenv").config();

const { META_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smpt.meta.ua",
  port: 465, // 25, 465, 2525
  secure: true,
  auth: {
    user: "liudmyla.horobets@meta.ua",
    pass: META_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  const email = { ...data, from: "liudmyla.horobets@meta.ua" };
  await transport
    .sendMail(email)
    .then(() => console.log("Email sent success"))
    .catch((error) => console.log(error.message));
 
  return true;
};

module.exports = sendEmail;
