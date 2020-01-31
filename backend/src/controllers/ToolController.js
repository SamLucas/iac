import Tool from "@/models/Tools";

module.exports = {
  async index(req, res) {
    const tool = await Tool.findAll();
    return res.json(tool);
  },

  async show(req, res) {
    const { tool_id } = req.params;
    const tool = await Tool.findByPk(tool_id);
    return res.json(tool);
  },

  async store(req, res) {
    const { titulo, descricao, autor } = req.body;
    const ferramenta_url = req.file.filename;

    const data = { titulo, descricao, autor, ferramenta_url };

    const new_noticia = await Tool.create(data);
    return res.json(new_noticia);
  },

  async update(req, res) {
    const { id, titulo, descricao, autor } = req.body;
    const ferramenta_url = req.file.filename;

    const data = { id, titulo, descricao, autor, ferramenta_url };
    const noicia = await Tool.update(data, { where: { id } });
    return res.json(noicia);
  },

  async delete(req, res) {
    const { id } = req.query;
    await Tool.destroy({ where: { id } });
    return res.json();
  }
};
