import { Router } from "express";
import multer from "multer";

import verifyToken from "@/middlewares/verifyToken";
import MulterConfigPaper from "@/middlewares/multer/papers";
import MulterConfigMembers from "@/middlewares/multer/members";
import MulterConfigDownloads from "@/middlewares/multer/downloads";

const routes = new Router();

import UserController from "@/controllers/UserController";
import ToolController from "@/controllers/ToolController";
import LoginController from "@/controllers/LoginController";
import PaperController from "@/controllers/PaperController";
import ContactController from "@/controllers/ContactController";
import NewsPaperController from "@/controllers/NewsPaperController";
import LineSearchController from "@/controllers/LineSearchController";

// Rotas Publicas
routes.post("/login", LoginController.login);
routes.post("/contact", ContactController.store);
routes.get("/usuarios", UserController.index);
routes.get("/noticias", NewsPaperController.index);
routes.get("/ferramentas", ToolController.index);
routes.get("/linhas", LineSearchController.index);

routes.use(verifyToken);

// Usuarios
routes.get("/usuarios", UserController.index);
routes.get("/usuarios/:user_id", UserController.show);
routes.delete("/usuarios", UserController.delete);
routes.post(
  "/usuarios",
  multer(MulterConfigMembers).single("file"),
  UserController.store
);
routes.put(
  "/usuarios",
  multer(MulterConfigMembers).single("file"),
  UserController.update
);

// Contatos
routes.get("/contact", ContactController.index);
routes.get("/contact/:contact_id", ContactController.show);
routes.put("/contact", ContactController.update);
routes.delete("/contact", ContactController.delete);

// Newspapaer
routes.get("/noticias", NewsPaperController.index);
routes.get("/noticias/:noticias_id", NewsPaperController.show);
routes.post("/noticias", NewsPaperController.store);
routes.put("/noticias", NewsPaperController.update);
routes.delete("/noticias", NewsPaperController.delete);

// Ferramentas
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
routes.get("/linhas/:linha_id", LineSearchController.show);
routes.post("/linhas", LineSearchController.store);
routes.put("/linhas", LineSearchController.update);
routes.delete("/linhas", LineSearchController.delete);

// Papper
routes.get("/papers", PaperController.index);
routes.get("/papers/:paper_id", PaperController.show);
routes.post(
  "/papers/:line_id",
  multer(MulterConfigPaper).single("file"),
  PaperController.store
);
routes.delete("/papers", PaperController.delete);
routes.put(
  "/papers",
  multer(MulterConfigPaper).single("file"),
  PaperController.update
);

export default routes;
