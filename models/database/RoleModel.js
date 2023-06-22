const { Sequelize, DataTypes } = require("sequelize");
const { POSTGRESQL_DEVELOPMENT_HOST } = require("../../configs/db");
const sequelize = new Sequelize(POSTGRESQL_DEVELOPMENT_HOST);

const Role = sequelize.define("role", {
  roleId: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  roleName: {
    type: DataTypes.STRING(),
  },
});
const initRole = () => {
  return Role.sync({ alert: true });
};

module.exports = { Role, initRole };
