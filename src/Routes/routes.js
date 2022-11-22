import express from "express";
import homeController from "../controller/homeController";

const router = express.Router();

const initRoutes = (app) => {
  router.get("/", homeController.getUsers);
  router.get("/detail-user/:id", homeController.getUserDetail);
  router.post("/create-user", homeController.createUser);
  router.post("/delete-user", homeController.deleteUser);
  router.get("/edit-user/:id", homeController.getUserEditPage);
  router.get("/about", (req, res) => {
    res.send("About page");
  });

  return app.use("/", router);
};

export default initRoutes;
