const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");

const auth = {
  auth: {
    api_key: "c396480cf38404548d0f2bfa44acfb13-cb3791c4-9edb0b79",
    domain: "sandboxbb76863f60614e5f856899b8764f8da4.mailgun.org",
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
