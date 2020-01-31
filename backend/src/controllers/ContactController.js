import Contact from "@/models/Contact";

module.exports = {
  async index(req, res) {
    const contact = await Contact.findAll();
    return res.json(contact);
  },

  async show(req, res) {
    const { contact_id } = req.params;
    const contact = await Contact.findByPk(contact_id);
    return res.json(contact);
  },

  async store(req, res) {
    const { name, email, assunto, mensagem } = req.body;
    const data = { name, email, assunto, mensagem };

    const new_contact = await Contact.create(data);
    return res.json(new_contact);
  },

  async update(req, res) {
    const { id, name, email, assunto, mensagem } = req.body;
    const data = { id, name, email, assunto, mensagem };
    const contact = await Contact.update(data, { where: { id } });
    return res.json(contact);
  },

  async delete(req, res) {
    const { id } = req.query;
    await Contact.destroy({ where: { id } });
    return res.json();
  }
};
