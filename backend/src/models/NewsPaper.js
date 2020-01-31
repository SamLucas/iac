import { Model, DataTypes } from "sequelize";

class NewsPaper extends Model {
  static init(sequelize) {
    super.init(
      {
        titulo: DataTypes.STRING,
        ativo: DataTypes.BOOLEAN,
        descricao: DataTypes.STRING,
        autor: DataTypes.STRING,
        texto: DataTypes.STRING
      },
      { sequelize }
    );
  }
}

module.exports = NewsPaper;
