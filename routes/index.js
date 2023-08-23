const seaCreatureAPI = require("./API/seaCreatureAPI");
const commentAPI = require("./API/commentAPI");
const favoriteAPI = require("./API/favoriteAPI");
const roleAPI = require("./API/roleAPI");
const suggestionAPI = require("./API/suggestionAPI");
const userAPI = require("./API/userAPI");
const userRoleAPI = require("./API/userRoleAPI");

function router(server) {
   server.use("/api/seaCreature/", seaCreatureAPI);
   server.use("/api/comment/", commentAPI);
   server.use("/api/favorite/", favoriteAPI);
   server.use("/api/role/", roleAPI);
   server.use("/api/suggestion/", suggestionAPI);
   server.use("/api/user/", userAPI);
   server.use("/api/userRole/", userRoleAPI);
}

module.exports = router;
