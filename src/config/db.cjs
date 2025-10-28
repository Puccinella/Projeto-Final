const { Sequelize } = require('sequelize');
const sql = new Sequelize(
    "pj_final",
    "root",
    "120477El.",
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
