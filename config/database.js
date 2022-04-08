/* -------------------------------------------------------------------------- */
/*                               Databese Conection                           */
/* -------------------------------------------------------------------------- */

const Sequelize = require('sequelize')
// const configDB = require('./config')['database']

module.exports = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect:'mysql'
    }
)