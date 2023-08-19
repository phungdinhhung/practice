const { Sequelize, DataTypes } = require("sequelize");
const { POSTGRESQL_DEVELOPMENT_HOST } = require("../../configs/db");
const sequelize = new Sequelize(POSTGRESQL_DEVELOPMENT_HOST);

const User = sequelize.define("user", {
   userId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
   },
   email: {
      type: DataTypes.STRING(30),
      unique: true,
   },
   fullName: {
      type: DataTypes.STRING(20),
   },
   password: {
      type: DataTypes.STRING,
   },
});

const initUser = async () => {
   return User.sync({ alter: true });
};

module.exports = { User, initUser };
