export default async function handler(req, res) {
  console.log(req.body);
  require("dotenv").config();
  let nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "emailsenderjoao@gmail.com",
      pass: "ylfyhmgpkoihkfma",
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
  await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, function (err, info) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
    res.status(200).json(req.body);
  });
}
