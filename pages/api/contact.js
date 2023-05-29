export default function handler(req, res) {
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

  const mailData = {
    from: "emailsenderjoao@gmail.com",
    to: "joaoborgesbiz@gmail.com",
    subject: `${req.body.subject}`,
    text: req.body.name + req.body.message + " | sent from:" + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from: ${req.body.name}</p> <p>${req.body.email}</p>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  res.status(200).json(req.body);
}
