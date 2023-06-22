const { Sequelize, DataTypes } = require("sequelize");
const { POSTGRESQL_DEVELOPMENT_HOST } = require("../../configs/db");
const sequelize = new Sequelize(POSTGRESQL_DEVELOPMENT_HOST);
const { User } = require("./UserModel");
const { Animal } = require("./AnimalModel");

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
   animalId: {
      type: DataTypes.UUID,
      references: {
         model: Animal,
         key: "animalId",
      },
      allowNull: false,
   },
   content: {
      type: DataTypes.TEXT,
      allowNull: false,
   },
});

User.belongsToMany(Animal, { through: Comment, foreignKey: "userId" });
Animal.belongsToMany(User, { through: Comment, foreignKey: "animalId" });

const initComment = () => {
   return Comment.sync({ alert: true });
};

module.exports = { Comment, initComment };
