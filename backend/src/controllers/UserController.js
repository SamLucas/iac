import User from "@/Model/User";

module.exports = {
  async index(req, res) {
    const users = await User.findAll();
    return res.json(users);
  },

  async show(req, res) {
    const { user_id } = req.params;
    const users = await User.findByPk(user_id);
    return res.json(users);
  },

  async store(req, res) {
    const { name, email, senha, tipo, descricao, lattes } = req.body;
    const foto_url = req.file ? req.file.filename : null;

    const data = { name, email, senha, tipo, descricao, lattes, foto_url };
    let user = User.findOne({ email });

    if (!user)
      return res.status(400).json({ error: "usuario não foi encontrado." });

    const new_user = await User.create(data);

    return res.json(new_user);
  },

  async update(req, res) {
    const { id, name, email, senha, tipo, descricao, lattes } = req.body;
    const foto_url = req.file.filename;

    const data = { id, name, email, senha, tipo, descricao, lattes, foto_url };
    const user = await User.update(data, { where: { id } });
    return res.json(user);
  },

  async delete(req, res) {
    const { id } = req.query;
    await User.destroy({ where: { id } });
    return res.json();
  }
};
