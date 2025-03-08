const { DataTypes } = require("sequelize")
const sequelize = require("../config/db.conf")

const User = sequelize.define("User",{

    id:{
        type:DataTypes.INTEGER,
        allowNull:false

    },

    firstName:{
        type:DataTypes.STRING,
        allowNull:false
    },

    lastName:{
        type:DataTypes.STRING,
        allowNull:false
    },

    email:{
        type:DataTypes.STRING,
        allowNull:false
    },

    password:{
        type:DataTypes.STRING,
        allowNull:false
    }
})