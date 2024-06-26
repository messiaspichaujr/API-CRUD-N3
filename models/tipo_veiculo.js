import { Sequelize } from "sequelize";
import db from "../config/database.js";

const TipoVeiculo = db.define("TipoVeiculo", {
    id_tipo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});

export default TipoVeiculo;
