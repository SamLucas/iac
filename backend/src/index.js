require("dotenv").config();
require("./database");

import express from "express";
import routes from "@/routes";
import cors from "cors";
import morgan from "morgan";

import { Download, ViewFile } from "@/middlewares/upload&download";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan(process.env.MORGAN_TYPE));
app.use(cors());

app.get(Download.url, Download.func);
app.use(ViewFile.url, ViewFile.func);
app.use(routes);

app.listen(3333);
