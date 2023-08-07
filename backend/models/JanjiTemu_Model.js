import { Sequelize, DataTypes } from "sequelize";
import db from "../config/database.js";


const JanjiTemu = db.define('janjitemu', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      id_psikolog: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      id_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      id_jadwal: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      tanggal: {
        type: DataTypes.DATE,
      },
      jam: {
        type: DataTypes.TIME,
      },
      status: {
        type: DataTypes.STRING,
      },
}, {
    freezeTableName: true
})


export default JanjiTemu;