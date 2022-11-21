import express from "express";

const router = express.Router();

const initRoutes = (app) => {
  router.get("/", (req, res) => {
    res.render("index.ejs");
  });

  router.get("/about", (req, res) => {
    res.send("About page");
  });

  return app.use("/", router);
};

export default initRoutes;
