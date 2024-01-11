import { NextFunction, Request, Response } from "express";

const testMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if (+req.params.id % 2 == 0) {
    next();
  } else {
    res.status(400).json("có lỗi");
  }
};
export default testMiddleware;
