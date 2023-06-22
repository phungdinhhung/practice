const { Sequelize, DataTypes } = require("sequelize");
const { POSTGRESQL_DEVELOPMENT_HOST } = require("../../configs/db");
const sequelize = new Sequelize(POSTGRESQL_DEVELOPMENT_HOST);
const { User } = require("./UserModel");
const Suggestion = sequelize.define("suggestion", {
   suggestionId: {
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
   },
   title: {
      type: DataTypes.STRING(50),
      allowNull: false,
   },
   content: {
      type: DataTypes.TEXT,
      allowNull: false,
   },
});

User.hasMany(Suggestion, {
   foreignKey: "userId",
});

const initSuggestion = () => {
   return Suggestion.sync({ alert: true });
};

module.exports = { Suggestion, initSuggestion };
