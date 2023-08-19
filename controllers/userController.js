const userService = require("../services/userService");
class userController {
   register = async (req, res) => {
      await userService
         .register(req.body)
         .then((data) => {
            console.log("Then: " + data);
            if (data !== "EMAIL DUPPLICATE") return res.status(200).send(data);
            return res.status(400).json("Email already registered");
         })
         .catch((err) => {
            return res.status(500).send(err.message);
         });
   };

   login = async (req, res) => {
      await userService
         .login(req.body)
         .then((data) => {
            console.log(data);
            if (data === "Email not found" || data === "Invalid password!") return res.status(400).json("Wrong account or password");
            return res.status(200).send(data);
         })
         .catch((err) => {
            return res.status(500).send(err.message);
         });
   };

   profile = async (req, res) => {};
}

module.exports = new userController();
