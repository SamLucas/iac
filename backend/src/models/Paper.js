import { Model, DataTypes } from "sequelize";
import { promisify } from "util";
import fs from "fs";
import path from "path";

class Paper extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING,
        autor: DataTypes.STRING,
        descricao: DataTypes.STRING,
        paper_url: DataTypes.STRING
      },
      {
        hooks: {
          afterDestroy: function(paper) {
            let { dataValues } = paper;

            promisify(fs.unlink)(
              path.resolve(
                __dirname,
                "..",
                "..",
                "uploads",
                "papers",
                dataValues.paper_url
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

  static associate({ models }) {
    this.belongsTo(models.LineSearch, {
      foreignKey: "line_id",
      as: "line_search"
    });
  }
}

module.exports = Paper;

// hooks: {
//   beforeDestroy: (Paper, options) => {
//     console.log("ajskldjasdklj");

//   }
