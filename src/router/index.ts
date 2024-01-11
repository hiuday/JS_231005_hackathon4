import { Express } from "express";
import userController from "../controller/user.controller";
import postController from "../controller/post.controller";

const Router = (server: Express) => {
  server.use("/api/v1/users", userController);
  server.use("/api/v1/posts", postController);
};
export default Router;
