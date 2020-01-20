const express = require("express");
const routes = express.Router();

routes.get("/usuarios", (req, res) => {
  return res.json({ mesagem: "ola" });
});

module.exports = routes;
