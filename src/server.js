// By using babel so that we can use both CommonJS and ESModule Syntax
const express = require("express"); // CommonJS
import configViewEngine from "./configs/viewEngine"; //ESModule

const app = express();
const port = 8080;

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
