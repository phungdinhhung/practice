const roleService = require("../services/roleService");

class roleController {
   addRole = async (req, res) => {
      const roleName = req.body.roleName.toLowerCase();
      await roleService
         .addRole(roleName)
         .then((data) => {
            if (data) res.status(200).send(data);
            res.status(400).json("Lỗi thêm role");
         })
         .catch((err) => {
            res.status(500).send(err);
         });
   };
}
module.exports = new roleController();
