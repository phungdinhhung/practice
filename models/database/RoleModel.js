const { Sequelize, DataTypes } = require("sequelize");
const { POSTGRESQL_DEVELOPMENT_HOST } = require("../../configs/db");
const sequelize = new Sequelize(POSTGRESQL_DEVELOPMENT_HOST);

const Role = sequelize.define("role", {
   roleId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
   },
   roleName: {
      type: DataTypes.STRING(30),
      unique: true,
      allowNull: false,
   },
});
const initRole = () => {
   return Role.sync({ alert: true });
};

module.exports = { Role, initRole };
