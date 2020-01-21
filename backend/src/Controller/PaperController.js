const Paper = require("../Model/Paper");

module.exports = {
  async index(req, res) {
    const papper = await Paper.findAll();
    return res.json(papper);
  },

  async show(req, res) {
    const { papper_id } = req.params;
    const papper = await Paper.findByPk(papper_id);
    return res.json(papper);
  },

  async store(req, res) {
    const { line_id } = req.params;
    const { nome, autor, descricao } = req.body;
    const data = { nome, autor, descricao, line_id };

    const new_papper = await Paper.create(data);
    return res.json(new_papper);
  },

  async update(req, res) {
    const { id, titulo, ativo, descricao, autor, texto } = req.body;
    const data = { id, titulo, ativo, descricao, autor, texto };
    const noicia = await Paper.update(data, { where: { id } });
    return res.json(noicia);
  },

  async delete(req, res) {
    const { id } = req.query;
    await Paper.destroy({ where: { id } });
    return res.json();
  }
};
