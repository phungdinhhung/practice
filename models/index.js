const { User, initUser } = require("../models/database/UserModel");
const { Role, initRole } = require("../models/database/RoleModel");
const { UserRole, initUserRole } = require("../models/database/UserRoleModel");
const { SeaCreature, initSeaCreature } = require("../models/database/SeaCreatureModel");
const { Comment, initComment } = require("../models/database/CommentModel");
const { Favorite, initFavorite } = require("../models/database/FavoriteModel");
const { Suggestion, initSuggestion } = require("../models/database/SuggestionModel");

const initAll = async () => {
   await initUser()
      .then(async () => {
         await initRole();
         await initSeaCreature();
      })
      .then(async () => {
         await initUserRole();
         await initComment();
         await initFavorite();
         await initSuggestion();
      });
};

module.exports = {
   initAll,
   User,
   Role,
   UserRole,
   SeaCreature,
   Comment,
   Favorite,
   Suggestion,
};
