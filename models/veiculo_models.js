import { Sequelize } from "sequelize";
const { DataTypes } = Sequelize;
import db from "../config/database.js";
import Proprietario from "./proprietario_models.js";
import TipoVeiculo from "./tipo_veiculo.js";

const Veiculo = db.define('Veiculo', {
    placa_veiculo: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    modelo_veiculo: DataTypes.STRING,
    preco_veiculo: DataTypes.FLOAT,
    cpf: {
        type: DataTypes.STRING,
        references: {
            model: Proprietario,
            key: 'cpf'
        }
    },
    id_tipo: {
        type: DataTypes.INTEGER,
        references: {
            model: TipoVeiculo,
            key: 'id_tipo'
        }
    }
}, {
    timestamps: false
});

Proprietario.hasMany(Veiculo, { foreignKey: 'cpf' });
Veiculo.belongsTo(Proprietario, { foreignKey: 'cpf' });
Veiculo.belongsTo(TipoVeiculo, { foreignKey: 'id_tipo' });

export default Veiculo;
