import express from "express";
import UserService from "../services/user.service";

const userController = express.Router();
const userService = new UserService();
//lấy tất cả user
userController.get("/", userService.getAllUser);
//lấy user theo id
userController.get("/user/:id", userService.getUserById);
//lấy user theo tên
userController.get("/user/?name=", userService.getUserByName);
//tạo user
userController.post("/", userService.creteUser);
//xoá user
userController.delete("/:id", userService.deleteUser);
//sửa user
userController.put("/:id", userService.updateUser);
export default userController;
