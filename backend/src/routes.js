const express = require("express");
const routes = express.Router();

const UserController = require("./Controller/UserController");
const ToolController = require("./Controller/ToolController");
const PaperController = require("./Controller/PaperController");
const ContactController = require("./Controller/ContactController");
const NewsPaperController = require("./Controller/NewsPaperController");
const LineSearchController = require("./Controller/LineSearchController");

// Usuarios
routes.get("/usuarios", UserController.index);
routes.get("/usuarios/:user_id", UserController.show);
routes.post("/usuarios", UserController.store);
routes.put("/usuarios", UserController.update);
routes.delete("/usuarios", UserController.delete);

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
routes.post("/ferramentas", ToolController.store);
routes.put("/ferramentas", ToolController.update);
routes.delete("/ferramentas", ToolController.delete);

// Linha de pesquisa
routes.get("/linhas", LineSearchController.index);
routes.get("/linhas/:linha_id", LineSearchController.show);
routes.post("/linhas", LineSearchController.store);
routes.put("/linhas", LineSearchController.update);
routes.delete("/linhas", LineSearchController.delete);

// Papper
routes.get("/papers", PaperController.index);
routes.get("/papers/:paper_id", PaperController.show);
routes.post("/papers/:line_id", PaperController.store);
routes.put("/papers", PaperController.update);
routes.delete("/papers", PaperController.delete);

module.exports = routes;
