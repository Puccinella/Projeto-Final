const { Sequelize } = require('sequelize');
const sql = new Sequelize(
    "pj-final",
    "root",
    "250736",
    {
        host: "LocalHost",
        dialect: 'mysql'
    }
);

sql.authenticate().then((function(){
    console.log("Foi conectado")
})).catch(function(erro){
    console.log("ferrou não deu" + erro)
})

module.exports = sql;