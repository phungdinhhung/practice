const { Sequelize, DataTypes } = require("sequelize");
const { POSTGRESQL_DEVELOPMENT_HOST } = require("../../configs/db");
const sequelize = new Sequelize(POSTGRESQL_DEVELOPMENT_HOST);
const { User } = require("./UserModel");
const { SeaCreature } = require("./SeaCreatureModel");

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
   SeaCreatureId: {
      type: DataTypes.UUID,
      references: {
         model: SeaCreature,
         key: "seaCreatureId",
      },
      primaryKey: true,
   },
});

User.belongsToMany(SeaCreature, { through: Favorite, foreignKey: "userId" });
SeaCreature.belongsToMany(User, { through: Favorite, foreignKey: "seaCreatureId" });

const initFavorite = () => {
   return Favorite.sync({ alert: true });
};

module.exports = { Favorite, initFavorite };
