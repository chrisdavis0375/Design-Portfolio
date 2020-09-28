// DEPENDENCIES
const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;
const sendMail = require("./mail");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Static folder
app.use("/assets", express.static(path.join(__dirname, "assets")));

// ROUTES
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.post("/send", function (req, res) {
  console.log("Data: ", req.body);
  const email = req.body.email;
  const output = `
  Contact Details
  ==========================================
  Name: ${req.body.name}
  Email: ${req.body.email}
  Subject: ${req.body.subject}
  ==========================================
  Message: 
  ${req.body.message}
  `;
  sendMail(email, output, function (err, data) {
    if (err) {
      res.status(500).json({ message: "Internal Error" });
    } else {
      res.json({ message: "Email sent!" });
    }
  });
});
// Start server
// ===============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
