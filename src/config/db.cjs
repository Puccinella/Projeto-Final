const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    "pj_final",
    "root",
    "aluno123",
    {
        host: "localhost",
        dialect: "mysql"
    }
)


sequelize.authenticate().then(() => {
    console.log("Conexão com o banco de dados realizada com sucesso!");
}).catch((error) => {
    console.error("Erro ao conectar ao banco de dados:", error);
});

module.exports = sequelize;