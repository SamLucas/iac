import { Model, DataTypes } from "sequelize";

class Tool extends Model {
  static init(sequelize) {
    super.init(
      {
        titulo: DataTypes.STRING,
        autor: DataTypes.STRING,
        descricao: DataTypes.STRING,
        ferramenta_url: DataTypes.STRING
      },
      { sequelize }
    );
  }
}

module.exports = Tool;
