const NewsPaper = require("../Model/NewsPaper");

module.exports = {
  async index(req, res) {
    const noticia = await NewsPaper.findAll();
    return res.json(noticia);
  },

  async show(req, res) {
    const { noticia_id } = req.params;
    const noticia = await NewsPaper.findByPk(noticia_id);
    return res.json(noticia);
  },

  async store(req, res) {
    const { titulo, ativo, descricao, autor, texto } = req.body;
    const data = { titulo, ativo, descricao, autor, texto };

    const new_noticia = await NewsPaper.create(data);
    return res.json(new_noticia);
  },

  async update(req, res) {
    const { id, titulo, ativo, descricao, autor, texto } = req.body;
    const data = { id, titulo, ativo, descricao, autor, texto };
    const noicia = await NewsPaper.update(data, { where: { id } });
    return res.json(noicia);
  },

  async delete(req, res) {
    const { id } = req.query;
    await NewsPaper.destroy({ where: { id } });
    return res.json();
  }
};
