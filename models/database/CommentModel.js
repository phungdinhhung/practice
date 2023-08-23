const { Sequelize, DataTypes } = require("sequelize");
const { POSTGRESQL_DEVELOPMENT_HOST } = require("../../configs/db");
const sequelize = new Sequelize(POSTGRESQL_DEVELOPMENT_HOST);
const { User } = require("./UserModel");
const { SeaCreature } = require("./SeaCreatureModel");

const Comment = sequelize.define("comment", {
   commentId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
   },
   userId: {
      type: DataTypes.UUID,
      references: {
         model: User,
         key: "userId",
      },
      allowNull: false,
   },
   seaCreatureId: {
      type: DataTypes.UUID,
      references: {
         model: SeaCreature,
         key: "seaCreatureId",
      },
      allowNull: false,
   },
   content: {
      type: DataTypes.TEXT,
      allowNull: false,
   },
});

User.belongsToMany(SeaCreature, { through: Comment, foreignKey: "userId" });
SeaCreature.belongsToMany(User, { through: Comment, foreignKey: "seaCreatureId" });

const initComment = () => {
   return Comment.sync({ alert: true });
};

module.exports = { Comment, initComment };
