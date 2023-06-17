const userService = require('../services/userService');

class userController {
   test = async (req,res) => {
      const number = 10;
      console.log("controller number: " + number)
      const service = await userService.check(number);
      const ex = number + service;
      console.log("ex: " + ex)
   }
}

module.exports = new userController();