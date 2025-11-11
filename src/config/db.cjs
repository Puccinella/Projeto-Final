const { Sequelize } = require('sequelize');
const sql = new Sequelize(
    "pj_final",
    "root",
    "aluno123",
    {
        host: "localhost",
        dialect: 'mysql',
        port: 3306
    }
);

sql.authenticate().then((function(){
    console.log("Foi conectado")
})).catch(function(erro){
    console.log("ferrou não deu" + erro)
})

module.exports = sql; 