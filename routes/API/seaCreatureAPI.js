const router = require("express").Router();
const seaCreatureController = require("../../controllers/seaCreatureController");

router.get('/', seaCreatureController.showAllSC);
router.post('/upload', seaCreatureController.uploadSC)
router.get('/remove', seaCreatureController.removeSC)
module.exports = router;
