const { Sequelize, DataTypes } = require("sequelize");
const { POSTGRESQL_DEVELOPMENT_HOST } = require("../../configs/db");
const sequelize = new Sequelize(POSTGRESQL_DEVELOPMENT_HOST);

const SeaCreature = sequelize.define("seaCreature", {
   seaCreatureId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
   },
   name: {
      type: DataTypes.STRING(30),
      allowNull: false,
   },
   overview: {
      type: DataTypes.STRING(100),
      allowNull: false,
   },
   characteristic: {
      type: DataTypes.STRING(100),
      allowNull: false,
   },
   zone: {
      type: DataTypes.STRING(30),
      allowNull: false,
   },
   height: {
      type: DataTypes.STRING(10),
      allowNull: false,
   },
});

const initSeaCreature = () => {
   return SeaCreature.sync({ alter: true });
};

module.exports = { SeaCreature, initSeaCreature };
