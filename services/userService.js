const database = require("../models/index");
var bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const config = require("../configs/auth.config");
const roleService = require("../services/roleService");
const userRoleService = require("../services/userRoleService");

class userService {
   register = async (data) => {
      const hashedPassword = await bcrypt.hash(data.password, 10);
      let userId;
      const existingUser = await database.User.findOne({
         where: { email: data.email },
      });
      if (existingUser) {
         return "EMAIL DUPPLICATE";
      }
      await database.User.create({
         email: data.email,
         fullName: data.fullName,
         password: hashedPassword,
      }).then((data) => {
         userId = data.userId;
         console.log("UserId: " + userId);
      });
      let roleId;
      await roleService.getRoleByRoleName("customer").then((data) => {
         roleId = data.roleId;
      });
      console.log("roleId: " + roleId);
      if (userId && roleId) {
         var userRole = await userRoleService.addUserRole({
            userId,
            roleId,
         });
      }
      console.log("userRole: " + userRole);
      let check = userRole.find((userEle) => {
         return typeof userEle === "boolean";
      });
      return check ? userRole[0] : "EMAIL DUPPLICATE";
   };
   login = async (data) => {
      await database.User.findOne({
         where: { email: data.email },
      }).then(async (user) => {
         if (!user) {
            return "Email not found!";
         }
         const checkPass = bcrypt.compareSync(data.password, user.password);
         if (!checkPass) {
            return "Invalid password!";
         }
         const token = jwt.sign(
            {
               id: user.userId,
            },
            process.env.jwtsecret,
            {
               expiresIn: config.jwtExpiration,
            }
         );
         const roles = await database.UserRole.findAll({
            where: { userId: user.userId },
         });
         const roleUser = await Promise.all(
            roles.map(async (element) => {
               return await database.Role.findOne({
                  where: { roleId: element.roleId },
               }).then((rl) => {
                  return rl.roleName;
               });
            })
         );
         return { ...user.toJSON(), token, roleUser };
      });
   };
}

module.exports = new userService();
