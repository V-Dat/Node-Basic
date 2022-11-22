import express from "express";
import homeController from "../controller/homeController";

const router = express.Router();

const initRoutes = (app) => {
  router.get("/", (req, res) => homeController.getUsers(req, res));
  router.get("/detail/user/:id", (req, res) =>
    homeController.getUserDetail(req, res)
  );

  router.get("/about", (req, res) => {
    res.send("About page");
  });

  return app.use("/", router);
};

export default initRoutes;
