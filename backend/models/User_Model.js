import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const User = db.define('user', {
    id_user: DataTypes.INTEGER,
    nama_user: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
})

export default User;