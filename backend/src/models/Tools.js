import { Model, DataTypes } from "sequelize";
import { promisify } from "util";
import fs from "fs";
import path from "path";

class Tool extends Model {
  static init(sequelize) {
    super.init(
      {
        titulo: DataTypes.STRING,
        autor: DataTypes.STRING,
        descricao: DataTypes.STRING,
        ferramenta_url: DataTypes.STRING
      },
      {
        hooks: {
          afterDestroy: function(tools) {
            let { dataValues } = tools;

            promisify(fs.unlink)(
              path.resolve(
                __dirname,
                "..",
                "..",
                "uploads",
                "downloads",
                dataValues.ferramenta_url
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

module.exports = Tool;
