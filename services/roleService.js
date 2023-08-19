const database = require("../models/index");

class roleService {
   addRole = async (roleName) => {
      const roleMentor = await database.Role.create({ roleName: roleName.trim() });
      return roleMentor;
   };
   getRoleByRoleName = async (roleName) => {
      const role = await database.Role.findOne({
         where: {
            roleName: roleName,
         },
         raw: true,
      });
      return role;
   };
}

module.exports = new roleService();
