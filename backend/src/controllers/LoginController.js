import User from "@/models/User";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

module.exports = {
  async login(req, res) {
    const { email, senha } = req.body;

    const user = await User.findOne({ where: { email } });

    if (user) {
      if (bcrypt.compareSync(senha, user.senha)) {
        // { expiresIn: "3h" }
        jwt.sign({ user }, "secretkey", (err, token) => {
          return res.json({
            token,
            user
          });
        });
      } else return res.status(401).json({ mensage: "Senha invalidaw." });
    } else return res.status(401).json({ mensage: "Usuario não encontrado." });
  }
};
