
class userService { 
 check = async(data) =>{
   const service = data + 10;
   console.log("service: " + service);
   return service;
 }
}

module.exports = new userService();