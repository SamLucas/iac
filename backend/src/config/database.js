const configs = {
  dialect: "mysql",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  define: {
    timestamps: true,
    underscored: true
  }
};

console.log(configs);

module.exports = {
  development: { ...configs },
  production: { ...configs },
  test: { ...configs }
};
