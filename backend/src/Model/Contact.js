const { Model, DataTypes } = require("sequelize");

class Contact extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        assunto: DataTypes.STRING,
        mensagem: DataTypes.STRING
      },
      { sequelize }
    );
  }
}

module.exports = Contact;
