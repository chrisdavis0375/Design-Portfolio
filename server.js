// DEPENDENCIES
const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Static folder
app.use("/assets", express.static(path.join(__dirname, "assets")));

// ROUTES
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Start server
// ===============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
