const express = require("express");
const routes = express.Router();

const verifyToken = require("./config/verifyToken");

const UserController = require("./Controller/UserController");
const ToolController = require("./Controller/ToolController");
const PaperController = require("./Controller/PaperController");
const ContactController = require("./Controller/ContactController");
const NewsPaperController = require("./Controller/NewsPaperController");
const LineSearchController = require("./Controller/LineSearchController");

// Usuarios
routes.get("/usuarios", verifyToken, UserController.index);
routes.get("/usuarios/:user_id", verifyToken, UserController.show);
routes.post("/usuarios", UserController.store);
routes.put("/usuarios", verifyToken, UserController.update);
routes.delete("/usuarios", verifyToken, UserController.delete);

routes.post("/login", UserController.login);

// Contatos
routes.get("/contact", ContactController.index);
routes.get("/contact/:contact_id", ContactController.show);
routes.post("/contact", ContactController.store);
routes.put("/contact", ContactController.update);
routes.delete("/contact", ContactController.delete);

// Newspapaer
routes.get("/noticias", verifyToken, NewsPaperController.index);
routes.get("/noticias/:noticias_id", verifyToken, NewsPaperController.show);
routes.post("/noticias", verifyToken, NewsPaperController.store);
routes.put("/noticias", verifyToken, NewsPaperController.update);
routes.delete("/noticias", verifyToken, NewsPaperController.delete);

// Ferramentas
routes.get("/ferramentas", verifyToken, ToolController.index);
routes.get("/ferramentas/:ferramenta_id", verifyToken, ToolController.show);
routes.post("/ferramentas", verifyToken, ToolController.store);
routes.put("/ferramentas", verifyToken, ToolController.update);
routes.delete("/ferramentas", verifyToken, ToolController.delete);

// Linha de pesquisa
routes.get("/linhas", verifyToken, LineSearchController.index);
routes.get("/linhas/:linha_id", verifyToken, LineSearchController.show);
routes.post("/linhas", verifyToken, LineSearchController.store);
routes.put("/linhas", verifyToken, LineSearchController.update);
routes.delete("/linhas", verifyToken, LineSearchController.delete);

// Papper
routes.get("/papers", verifyToken, PaperController.index);
routes.get("/papers/:paper_id", verifyToken, PaperController.show);
routes.post("/papers/:line_id", verifyToken, PaperController.store);
routes.put("/papers", verifyToken, PaperController.update);
routes.delete("/papers", verifyToken, PaperController.delete);

module.exports = routes;
