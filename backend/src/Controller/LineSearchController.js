const LineSearch = require("../Model/LineSearch");

module.exports = {
  async index(req, res) {
    const linha = await LineSearch.findAll();
    return res.json(linha);
  },

  async show(req, res) {
    const { linha_id } = req.params;
    const linha = await LineSearch.findByPk(linha_id);
    return res.json(linha);
  },

  async store(req, res) {
    const { titulo, texto, professores } = req.body;
    const data = { titulo, texto, professores };

    const new_linha = await LineSearch.create(data);
    return res.json(new_linha);
  },

  async update(req, res) {
    const { id, titulo, texto, professores } = req.body;
    const data = { id, titulo, texto, professores };
    const noicia = await LineSearch.update(data, { where: { id } });
    return res.json(noicia);
  },

  async delete(req, res) {
    const { id } = req.query;
    await LineSearch.destroy({ where: { id } });
    return res.json();
  }
};
