import User from "@/Model/User";
import jwtc from "jsonwebtoken";

module.exports = {
  async login(req, res) {
    const { email, senha } = req.body;
    const user = await User.findOne({ email, senha });

    if (user) {
      jwt.sign({ user }, "secretkey", { expiresIn: "3h" }, (err, token) => {
        return res.json({
          token,
          user
        });
      });
    }
  }
};
