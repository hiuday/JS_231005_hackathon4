import { Request, Response, query } from "express";
import * as fs from "fs";
import * as path from "path";
class UserService {
  constructor() {}

  async getAllUser(req: Request, res: Response) {
    const fileUser: string = fs
      .readFileSync(path.join("../models/users.json"), "utf-8")
      .toString();

    const listUser: string = JSON.parse(fileUser);
    res.status(200).json(listUser);
  }
  getUserById(req: Request, res: Response) {
    const id: number = +req.params.id;
    const fileUser: string = fs
      .readFileSync(path.join("../models/users.json"), "utf-8")
      .toString();
    const listUser: any = JSON.parse(fileUser);

    const user: string = listUser.find((item: any) => item.id == id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json("không tìm thấy");
    }
  }
  getUserByName(req: Request, res: Response) {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    // const { query, path } = URL.parse(req.UR / true);
    if (req.url === `/user?name=${query.name}` && req.method === "GET") {
      const fileUser: string = fs
        .readFileSync(path.join("../models/users.json"), "utf-8")
        .toString();
      const listUser: any = JSON.parse(fileUser);
      const userName: any = listUser.filter((item: any) =>
        item.name.toLowerCase().includes(String(query.name))
      );
      res.status(200).json(userName);
    }
  }
  creteUser(req: Request, res: Response) {
    const newUser = req.body.id;
    const fileUser = fs.readFileSync("../models/users.json", "utf8");
    const listUser = JSON.parse(fileUser);
    listUser.push(newUser);
    fs.writeFileSync("../models/users.json", JSON.stringify(listUser));
    const validateEmail = (item: any) => {
      const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
      if (!regex.test(item.email) && item.email.length > 0) {
        res.json({
          status: 200,
          message: "Ok",
          data: listUser,
        });
      } else {
        res.json({
          status: 400,
          message: "chưa tạo được",
          data: listUser,
        });
      }
    };
    const validateName = (item: any) => {
      if (item.name.length < 6 && item.name.length > 0) {
        res.json({
          status: 400,
          message: "tên ngắn",
          data: listUser,
        });
      } else if (item.name.length > 16) {
        res.json({
          status: 400,
          message: "tên dài",
          data: listUser,
        });
      } else {
        res.json({
          status: 200,
          message: "ok",
          data: listUser,
        });
      }
    };
    const submid = async (e: FormDataEvent) => {
      validateEmail;
      validateName;
    };
    alert(submid);
    res.json({
      status: 201,
      message: "Ok",
      data: listUser,
    });
  }
  deleteUser(req: Request, res: Response) {
    const id: number = +req.params.id;

    const fileUser: string = fs.readFileSync("../models/users.json", "utf8");
    const listUser: any = JSON.parse(fileUser);
    const newListUser = listUser.filter((item: any) => item.id != id);
    fs.writeFileSync("../models/users.json", JSON.stringify(newListUser));

    res.json(newListUser);
  }
  updateUser(req: Request, res: Response) {
    const id: number = +req.params.id;
    const fileUsers: string = fs.readFileSync("../models/users.json", "utf8");
    const listUser: any = JSON.parse(fileUsers);
    listUser.map((item: any, index: number) => {
      if (item.id == id) {
        const newUser = { ...item, ...req.body };
        console.log(1111, newUser);
        listUser.splice(index, 1, newUser);
        return;
      }
    });
    fs.writeFileSync("../models/users.json", JSON.stringify(listUser));
    res.status(200).json(listUser);
  }

}
export default UserService;
