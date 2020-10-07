const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");
require("dotenv").config();
const API_KEY = process.env.API_KEY;
const DOMAIN = process.env.DOMAIN;
const auth = {
  auth: {
    api_key: API_KEY,
    domain: DOMAIN,
  },
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = function (email, text, cb) {
  const mailOptions = {
    from: email,
    to: "davissitesanddesigns@gmail.com",
    subject: "New Project Opportunity",
    text: text,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
};
module.exports = sendMail;
