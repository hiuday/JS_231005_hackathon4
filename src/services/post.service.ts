import { Request, Response, query } from "express";
import * as fs from "fs";
import * as path from "path";
class PostService {
  constructor() {}
  async getAllPost(req: Request, res: Response) {
    const filePost: string = fs
      .readFileSync(path.join("../models/posts.json"), "utf-8")
      .toString();

    const listPost: string = JSON.parse(filePost);
    res.status(200).json(listPost);
  }
  getPostById(req: Request, res: Response) {
    const id: number = +req.params.id;
    const filePost: string = fs
      .readFileSync(path.join("../models/posts.json"), "utf-8")
      .toString();
    const listPost: any = JSON.parse(filePost);

    const user: string = listPost.find((item: any) => item.id == id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json("không tìm thấy");
    }
  }

  cretePost(req: Request, res: Response) {
    const id: number = +req.params.id;
    const filePost: string = fs.readFileSync("../models/posts.json", "utf8");
    const listPost: any = JSON.parse(filePost);
    const post = listPost.find((item: any) => item.id == id);
    res.json(post);
  }
  deletePost(req: Request, res: Response) {
    const id: number = +req.params.id;
    const filePosts: string = fs.readFileSync(
      "./src/models/posts.json",
      "utf8"
    );
    const listPosts: any = JSON.parse(filePosts);
    const newListPost = listPosts.filter((item: any) => item.id != id);
    fs.writeFileSync("../models/posts.json", JSON.stringify(newListPost));

    res.json(newListPost);
  }
//   updatePost(req: Request, res: Response) {
//     const id: number = +req.params.id;
//     const fileUsers: string = fs.readFileSync("../models/posts.json", "utf8");
//     const listPost: any = JSON.parse(fileUsers);
//     listPost.map((item: any, index: number) => {
//       if (item.id == id) {
//         const newUser = { ...item, ...req.body };
//         console.log(1111, newUser);
//         listPost.splice(index, 1, newUser);
//         return;
//       }
//     });
//     fs.writeFileSync("../models/posts.json", JSON.stringify(listPost));
//     res.status(200).json(listPost);
//   }
}

export default PostService;
