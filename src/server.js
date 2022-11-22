// By using babel so that we can use both CommonJS and ESModule Syntax
const express = require("express"); // CommonJS
require("dotenv").config(); // We can use method on CommonJS Syntax [Shorter than ESModule]
import configViewEngine from "./configs/viewEngine"; //ESModule
import initRoutes from "./Routes/routes";

const app = express();
const port = process.env.PORT;

configViewEngine(app);
initRoutes(app);

app.listen(port, () => {
  console.log(`Server is running on port:${port}`);
});
