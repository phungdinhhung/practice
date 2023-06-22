const { Sequelize, DataTypes } = require("sequelize");
const { POSTGRESQL_DEVELOPMENT_HOST } = require("../../configs/db");
const sequelize = new Sequelize(POSTGRESQL_DEVELOPMENT_HOST);
const { User } = require("./UserModel");
const { Animal } = require("./AnimalModel");

const Favorite = sequelize.define("favorite", {
   favoriteId: {
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
      primaryKey: true,
   },
   AnimalId: {
      type: DataTypes.UUID,
      references: {
         model: Animal,
         key: "animalId",
      },
      primaryKey: true,
   },
});

User.belongsToMany(Animal, { through: Favorite, foreignKey: "userId" });
Animal.belongsToMany(User, { through: Favorite, foreignKey: "animalId" });

const initFavorite = () => {
   return Favorite.sync({ alert: true });
};

module.exports = { Favorite, initFavorite };
