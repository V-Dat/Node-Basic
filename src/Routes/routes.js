import express from "express";
import homeController from "../controller/homeController";

const router = express.Router();

const initRoutes = (app) => {
  router.get("/", homeController.getUsers);
  router.get("/detail/user/:id", homeController.getUserDetail);
  router.post("/create-user", homeController.createUser);
  router.get("/about", (req, res) => {
    res.send("About page");
  });

  return app.use("/", router);
};

export default initRoutes;
