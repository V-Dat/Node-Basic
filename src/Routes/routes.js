import express from "express";
import homeController from "../controller/homeController";

const router = express.Router();

const initRoutes = (app) => {
  router.get("/", (req, res) => homeController(req, res));

  router.get("/about", (req, res) => {
    res.send("About page");
  });

  return app.use("/", router);
};

export default initRoutes;
