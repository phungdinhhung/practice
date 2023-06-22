const { Sequelize, DataTypes } = require("sequelize");
const { POSTGRESQL_DEVELOPMENT_HOST } = require("../../configs/db");
const sequelize = new Sequelize(POSTGRESQL_DEVELOPMENT_HOST);
const { User } = require("./UserModel");
const { Role } = require("./RoleModel");

const UserRole = sequelize.define("user_role", {
   userId: {
      type: DataTypes.UUID,
      references: {
         model: User,
         key: "userId",
      },
      primaryKey: true,
   },
   roleId: {
      type: DataTypes.UUID,
      references: {
         model: Role,
         key: "roleId",
      },
      primaryKey: true,
   },
});

User.belongsToMany(Role, { through: UserRole, foreignKey: "userId" });
Role.belongsToMany(User, { through: UserRole, foreignKey: "roleId" });

const initUserRole = () => {
   return UserRole.sync({ alert: true });
};

module.exports = { UserRole, initUserRole };
