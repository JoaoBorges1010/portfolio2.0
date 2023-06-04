export default async function handler(req, res) {
  console.log(req.body);
  require("dotenv").config();
  let nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "emailsenderjoao@gmail.com",
      pass: process.env.password,
    },
    secure: true,
  });

  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
  });

  const mailData = {
    from: "emailsenderjoao@gmail.com",
    to: "joaoborgesbiz@gmail.com",
    subject: `${req.body.subject}`,
    text: req.body.name + req.body.message + " | sent from:" + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from: ${req.body.name}</p> <p>${req.body.email}</p>`,
  };
  await new Promise(async (resolve, reject) => {
    await transporter.sendMail(mailData, function (err, info) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
    res.status(200).json({ status: "OK" });
  });
}
