import { Sequelize } from "sequelize";

const db = new Sequelize('ceritain', 'Ceritain', 'LombaDb@3', {
    host: 'ceritain.mysql.database.azure.com',
    dialect: "mysql"
})

export default db;