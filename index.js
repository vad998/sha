const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");

const PORT = process.env.PORT || 5000;
const app = express();
const dirname = path.resolve();

app.use("/", serveStatic(path.join(dirname, "/")));

app.get("/", function (req, res) {
  res.sendFile(path.join(dirname, "/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
