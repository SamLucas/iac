const { Model, DataTypes } = require("sequelize");

class Paper extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING,
        autor: DataTypes.STRING,
        descricao: DataTypes.STRING,
        paper_url: DataTypes.STRING
      },
      { sequelize }
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
