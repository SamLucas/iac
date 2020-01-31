import express from "express";
import { Router } from "express";
import path from "path";
import multer from "multer";

import verifyToken from "@/middlewares/verifyToken";
import {
  MulterConfigDownloads,
  MulterConfigMembros,
  MulterConfigPapers
} from "@/middlewares/multer";

const routes = new Router();

import UserController from "@/Controller/UserController";
import ToolController from "@/Controller/ToolController";
import LoginController from "@/Controller/LoginController";
import PaperController from "@/Controller/PaperController";
import ContactController from "@/Controller/ContactController";
import NewsPaperController from "@/Controller/NewsPaperController";
import LineSearchController from "@/Controller/LineSearchController";

// Rotas Publicas
routes.post("/login", LoginController.login);
routes.get("/usuarios", UserController.index);

routes.post(
  "/usuarios",
  multer(MulterConfigMembros).single("file"),
  UserController.store
);

// routes.use(verifyToken);

// Usuarios
routes.get("/usuarios/:user_id", UserController.show);
routes.delete("/usuarios", UserController.delete);
routes.put(
  "/usuarios",
  multer(MulterConfigMembros).single("file"),
  UserController.update
);

// Contatos
routes.get("/contact", ContactController.index);
routes.get("/contact/:contact_id", ContactController.show);
routes.post("/contact", ContactController.store);
routes.put("/contact", ContactController.update);
routes.delete("/contact", ContactController.delete);

// Newspapaer
routes.get("/noticias", NewsPaperController.index);
routes.get("/noticias/:noticias_id", NewsPaperController.show);
routes.post("/noticias", NewsPaperController.store);
routes.put("/noticias", NewsPaperController.update);
routes.delete("/noticias", NewsPaperController.delete);

// Ferramentas
routes.get("/ferramentas", ToolController.index);
routes.get("/ferramentas/:ferramenta_id", ToolController.show);
routes.delete("/ferramentas", ToolController.delete);
routes.post(
  "/ferramentas",
  multer(MulterConfigDownloads).single("file"),

  ToolController.store
);
routes.put(
  "/ferramentas",
  multer(MulterConfigDownloads).single("file"),

  ToolController.update
);

// Linha de pesquisa
routes.get("/linhas", LineSearchController.index);
routes.get("/linhas/:linha_id", LineSearchController.show);
routes.post("/linhas", LineSearchController.store);
routes.put("/linhas", LineSearchController.update);
routes.delete("/linhas", LineSearchController.delete);

// Papper
routes.get("/papers", PaperController.index);
routes.get("/papers/:paper_id", PaperController.show);
routes.post(
  "/papers/:line_id",
  multer(MulterConfigPapers).single("file"),
  PaperController.store
);
routes.delete("/papers", PaperController.delete);
routes.put(
  "/papers",
  multer(MulterConfigPapers).single("file"),
  PaperController.update
);

export default routes;
