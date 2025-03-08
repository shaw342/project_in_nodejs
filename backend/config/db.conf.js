const { Sequelize } = require("sequelize")

const sequelize = new Sequelize({
    database:process.env.DB,
    host:process.env.HOST,
    password:process.env.PASSWORD,
    username:process.env.USERNAME
})

module.exports = sequelize