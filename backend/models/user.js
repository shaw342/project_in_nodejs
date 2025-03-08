const { Sequelize,DataTypes } = require("sequelize")

const sequelize = new Sequelize({
    database:process.env.DB,
    host:process.env.HOST,
    password:process.env.PASSWORD,
    username:process.env.USERNAME
})

const User = sequelize.define("User",{

    id:{
        type:DataTypes.INTEGER

    },

    firstName:{
        type:DataTypes.STRING
    },

    lastName:{
        type:DataTypes.STRING
    },

    email:{
        type:DataTypes.STRING
    },

    password:{
        type:DataTypes.STRING
    }
})