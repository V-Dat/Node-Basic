// By using babel so that we can use both CommonJS and ESModule Syntax
const express = require("express"); // CommonJS
require("dotenv").config(); // We can use method on CommonJS Syntax [Shorter than ESModule]
import configViewEngine from "./configs/viewEngine"; //ESModule

const app = express();
const port = process.env.PORT;

configViewEngine(app);

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/about", (req, res) => {
  res.send("About page");
});

app.listen(port, () => {
  console.log(`Server is running on port:${port}`);
});
