const router = require("express").Router();
const roleController = require("../../controllers/roleController");

router.post("/add", roleController.addRole);

module.exports = router;
