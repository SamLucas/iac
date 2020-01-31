import { Model, DataTypes } from "sequelize";
import bcrypt from "bcryptjs";
import { promisify } from "util";
import fs from "fs";
import path from "path";

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
      {
        hooks: {
          afterDestroy: function(user) {
            let { dataValues } = user;

            promisify(fs.unlink)(
              path.resolve(
                __dirname,
                "..",
                "..",
                "uploads",
                "members",
                dataValues.foto_url
              )
            );
          },

          beforeBulkDestroy: function(options) {
            options.individualHooks = true;
            return options;
          }
        },
        sequelize
      }
    );
  }
}

module.exports = User;
