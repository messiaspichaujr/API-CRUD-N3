import { Sequelize } from "sequelize";

const db = new Sequelize('garagem', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

export default db