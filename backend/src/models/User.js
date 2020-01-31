import { Model, DataTypes } from "sequelize";
import bcrypt from "bcryptjs";

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: {
          type: DataTypes.STRING,
          unique: true,
          allowNull: true,
          validate: {
            isEmail: { msg: "Please provide valid e-mail address" }
          }
        },
        senha: {
          type: DataTypes.STRING,
          allowNull: true,
          validate: {
            notEmpty: { msg: "Password can't be empty" }
          },
          set(value) {
            this.setDataValue("senha", bcrypt.hashSync(value, 10));
          }
        },
        tipo: DataTypes.BOOLEAN,
        descricao: DataTypes.TEXT("long"),
        lattes: DataTypes.STRING,
        foto_url: {
          type: DataTypes.STRING,
          allowNull: true
        }
      },
      { sequelize }
    );
  }
}

module.exports = User;
