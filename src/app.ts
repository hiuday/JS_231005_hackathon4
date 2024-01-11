import express, { urlencoded } from "express";
import cors from "cors";
import Router from "./router";
const app = express();
const PORT = 2000;
const url = require("url")
app.use(express.static("public"));
app.use(urlencoded);
app.use(cors());
Router(app);
app.listen(PORT, () => {
  console.log(`mở server,http://localhost:${PORT}`);
});
