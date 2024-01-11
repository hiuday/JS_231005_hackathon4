import express from "express";
import PostService from "../services/post.service";

const postController = express.Router();
const postService = new PostService();
//lấy tất cả user
postController.get("/", postService.getAllPost);
//lấy user theo id
postController.get("/user/:id", postService.getPostById);
//lấy user theo tên

//tạo user
postController.post("/", postService.cretePost);
//xoá user
postController.delete("/:id", postService.deletePost);
//sửa user
// postController.put("/:id", postService.updatePost);
export default postController;
