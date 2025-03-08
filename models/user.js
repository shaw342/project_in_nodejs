const { Sequelize,DataTypes } = require("sequelize")

const sequelize = new Sequelize("sqlite::memory")

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