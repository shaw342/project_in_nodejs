const { Sequelize } = require("sequelize")

const sequelize = new Sequelize(process.env.DB,process.env.USERNAME,process.env.PASSWORD,{
  host:"localhost",
  dialect:"mysql"
})

try {

  await sequelize.authenticate()
  console.log('====================================');
  console.log("successful to login in database");
  console.log('====================================');
  
} catch (error) {
  console.log('====================================');
  console.log(error);
  console.log('====================================');
}

module.exports = sequelize