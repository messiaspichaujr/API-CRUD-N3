import { Sequelize } from "sequelize";
import sequelize from "../config/database.js";

const Proprietario = sequelize.define("Proprietario", {
    cpf: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    fone: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});

export default Proprietario;
